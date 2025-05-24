
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mic, MicOff, Wand2, Volume2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VoiceEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: {
    type: 'income' | 'expense';
    amount: number;
    description: string;
    category: string;
  }) => void;
}

const VoiceEntryModal: React.FC<VoiceEntryModalProps> = ({ isOpen, onClose, onAddTransaction }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [parsedData, setParsedData] = useState({
    type: 'income' as 'income' | 'expense',
    amount: '',
    description: '',
    category: ''
  });
  const { toast } = useToast();

  // Simulate voice recognition (in real app, you'd use Web Speech API)
  const startListening = () => {
    setIsListening(true);
    
    // Simulate voice input processing
    setTimeout(() => {
      const sampleTranscripts = [
        "I sold 3 coffee cups for 15 dollars",
        "Bought supplies for 25 dollars", 
        "Received payment of 50 dollars for catering",
        "Paid 30 dollars for ingredients"
      ];
      
      const randomTranscript = sampleTranscripts[Math.floor(Math.random() * sampleTranscripts.length)];
      setTranscript(randomTranscript);
      parseVoiceInput(randomTranscript);
      setIsListening(false);
    }, 2000);
  };

  const parseVoiceInput = (text: string) => {
    // Simple AI-like parsing (in real app, you'd use NLP/AI)
    const lowerText = text.toLowerCase();
    
    // Extract amount
    const amountMatch = text.match(/(\d+(\.\d{2})?)/);
    const amount = amountMatch ? amountMatch[1] : '';
    
    // Determine type
    const isIncome = lowerText.includes('sold') || lowerText.includes('received') || lowerText.includes('payment') || lowerText.includes('earned');
    const type = isIncome ? 'income' : 'expense';
    
    // Extract description
    const description = text;
    
    // Categorize
    let category = 'Other';
    if (lowerText.includes('coffee') || lowerText.includes('food')) category = 'Food & Beverage';
    else if (lowerText.includes('supplies') || lowerText.includes('ingredients')) category = 'Supplies';
    else if (lowerText.includes('catering')) category = 'Catering Services';
    
    setParsedData({ type, amount, description, category });
    
    toast({
      title: "Voice Processed! 🎤",
      description: "Smart AI has analyzed your input",
    });
  };

  const handleSubmit = () => {
    if (!parsedData.amount || !parsedData.description) {
      toast({
        title: "Missing Information",
        description: "Please ensure amount and description are filled",
        variant: "destructive"
      });
      return;
    }

    onAddTransaction({
      type: parsedData.type,
      amount: parseFloat(parsedData.amount),
      description: parsedData.description,
      category: parsedData.category
    });

    // Reset form
    setTranscript('');
    setParsedData({ type: 'income', amount: '', description: '', category: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-orange-50 to-yellow-50">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-orange-600">
            <Volume2 className="w-6 h-6" />
            Voice Entry Magic ✨
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Voice Input Section */}
          <div className="text-center">
            <Button
              onClick={startListening}
              disabled={isListening}
              className={`w-24 h-24 rounded-full ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                  : 'bg-joy-gradient hover:scale-105'
              } transition-all duration-300`}
            >
              {isListening ? (
                <MicOff className="w-8 h-8" />
              ) : (
                <Mic className="w-8 h-8" />
              )}
            </Button>
            <p className="mt-4 text-sm text-gray-600">
              {isListening ? '🎤 Listening... Speak now!' : '👆 Tap to start voice entry'}
            </p>
          </div>

          {/* Transcript Display */}
          {transcript && (
            <div className="p-4 bg-white/50 rounded-lg border-2 border-orange-200">
              <Label className="text-sm font-medium text-orange-700">What you said:</Label>
              <p className="mt-1 text-gray-800 italic">"{transcript}"</p>
            </div>
          )}

          {/* Parsed Data Form */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Wand2 className="w-5 h-5 text-purple-500" />
              <Label className="text-purple-700 font-medium">AI Parsed Data</Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Type</Label>
                <Select value={parsedData.type} onValueChange={(value: 'income' | 'expense') => 
                  setParsedData(prev => ({ ...prev, type: value }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="income">💰 Income</SelectItem>
                    <SelectItem value="expense">💸 Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="amount">Amount ($)</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  value={parsedData.amount}
                  onChange={(e) => setParsedData(prev => ({ ...prev, amount: e.target.value }))}
                  className="bg-white/70"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={parsedData.description}
                onChange={(e) => setParsedData(prev => ({ ...prev, description: e.target.value }))}
                className="bg-white/70"
              />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={parsedData.category} onValueChange={(value) => 
                setParsedData(prev => ({ ...prev, category: value }))
              }>
                <SelectTrigger className="bg-white/70">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Food & Beverage">🍕 Food & Beverage</SelectItem>
                  <SelectItem value="Supplies">📦 Supplies</SelectItem>
                  <SelectItem value="Catering Services">🍽️ Catering Services</SelectItem>
                  <SelectItem value="Marketing">📢 Marketing</SelectItem>
                  <SelectItem value="Other">🎯 Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="flex-1 bg-joy-gradient">
              Add Transaction 🚀
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VoiceEntryModal;
