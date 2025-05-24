
import React, { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Camera, Upload, Sparkles, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PhotoEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: {
    type: 'income' | 'expense';
    amount: number;
    description: string;
    category: string;
  }) => void;
}

const PhotoEntryModal: React.FC<PhotoEntryModalProps> = ({ isOpen, onClose, onAddTransaction }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState({
    type: 'expense' as 'income' | 'expense',
    amount: '',
    description: '',
    category: ''
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Create preview
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    // Simulate AI processing
    setIsProcessing(true);
    
    setTimeout(() => {
      // Simulate extracted data from receipt
      const mockExtractions = [
        {
          type: 'expense' as const,
          amount: '23.45',
          description: 'Coffee beans and supplies',
          category: 'Supplies'
        },
        {
          type: 'expense' as const,
          amount: '45.99',
          description: 'Restaurant supply purchase',
          category: 'Food & Beverage'
        },
        {
          type: 'income' as const,
          amount: '127.50',
          description: 'Catering service payment',
          category: 'Catering Services'
        }
      ];

      const randomExtraction = mockExtractions[Math.floor(Math.random() * mockExtractions.length)];
      setExtractedData(randomExtraction);
      setIsProcessing(false);

      toast({
        title: "Photo Processed! 📸",
        description: "AI has extracted transaction details",
      });
    }, 2000);
  };

  const handleSubmit = () => {
    if (!extractedData.amount || !extractedData.description) {
      toast({
        title: "Missing Information",
        description: "Please ensure amount and description are filled",
        variant: "destructive"
      });
      return;
    }

    onAddTransaction({
      type: extractedData.type,
      amount: parseFloat(extractedData.amount),
      description: extractedData.description,
      category: extractedData.category
    });

    // Reset form
    setExtractedData({ type: 'expense', amount: '', description: '', category: '' });
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onClose();
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-gradient-to-br from-green-50 to-emerald-50">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-green-600">
            <Camera className="w-6 h-6" />
            Photo Receipt Magic 📸
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Photo Upload Section */}
          <div className="text-center">
            {!previewUrl ? (
              <div
                onClick={handleCameraClick}
                className="border-2 border-dashed border-green-300 rounded-lg p-8 cursor-pointer hover:border-green-400 transition-colors bg-white/50"
              >
                <Camera className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <p className="text-green-700 font-medium mb-2">Snap or Upload Receipt</p>
                <p className="text-sm text-gray-600">
                  Take a photo or upload from gallery
                </p>
                <Button className="mt-4 bg-profit-gradient">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={previewUrl}
                  alt="Receipt preview"
                  className="max-w-full h-48 object-cover rounded-lg mx-auto border-2 border-green-200"
                />
                {isProcessing && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <Sparkles className="w-8 h-8 mx-auto mb-2 animate-spin" />
                      <p>AI Processing...</p>
                    </div>
                  </div>
                )}
                {!isProcessing && extractedData.amount && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
              </div>
            )}
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {/* Extracted Data Form */}
          {extractedData.amount && (
            <div className="space-y-4 animate-slide-up">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-green-500" />
                <Label className="text-green-700 font-medium">AI Extracted Data</Label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Transaction Type</Label>
                  <Select value={extractedData.type} onValueChange={(value: 'income' | 'expense') => 
                    setExtractedData(prev => ({ ...prev, type: value }))
                  }>
                    <SelectTrigger className="bg-white/70">
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
                    value={extractedData.amount}
                    onChange={(e) => setExtractedData(prev => ({ ...prev, amount: e.target.value }))}
                    className="bg-white/70"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={extractedData.description}
                  onChange={(e) => setExtractedData(prev => ({ ...prev, description: e.target.value }))}
                  className="bg-white/70"
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={extractedData.category} onValueChange={(value) => 
                  setExtractedData(prev => ({ ...prev, category: value }))
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
          )}

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={!extractedData.amount}
              className="flex-1 bg-profit-gradient"
            >
              Add Transaction 🚀
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoEntryModal;
