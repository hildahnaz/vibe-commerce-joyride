
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Mic, 
  Camera, 
  Sparkles,
  Target,
  Zap,
  Heart,
  Star
} from 'lucide-react';
import VoiceEntryModal from '@/components/VoiceEntryModal';
import PhotoEntryModal from '@/components/PhotoEntryModal';
import ProfitCelebration from '@/components/ProfitCelebration';
import TransactionList from '@/components/TransactionList';
import InsightsPanel from '@/components/InsightsPanel';
import { useToast } from '@/hooks/use-toast';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  timestamp: Date;
}

const Index = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [dailyTarget] = useState(200);
  const { toast } = useToast();

  // Calculate metrics
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const profit = totalIncome - totalExpenses;
  const profitMargin = totalIncome > 0 ? (profit / totalIncome) * 100 : 0;
  const targetProgress = (profit / dailyTarget) * 100;

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'timestamp'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date()
    };
    
    setTransactions(prev => [newTransaction, ...prev]);
    
    // Trigger celebration for profit milestones
    if (transaction.type === 'income' && profit > 0 && profit % 100 === 0) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }

    toast({
      title: "Transaction Added! 🎉",
      description: `${transaction.type === 'income' ? 'Income' : 'Expense'} of $${transaction.amount} recorded`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      {/* Hero Header */}
      <div className="bg-hero-gradient text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
              <h1 className="text-4xl font-bold">ProfitJoy</h1>
              <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            </div>
            <p className="text-xl opacity-90 mb-6">
              Transform your business tracking into pure joy! ✨
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Card className="glass-effect border-white/30 text-white">
                <CardContent className="p-4 text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-300" />
                  <div className="text-2xl font-bold">${totalIncome.toFixed(2)}</div>
                  <div className="text-sm opacity-80">Total Income</div>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-white/30 text-white">
                <CardContent className="p-4 text-center">
                  <TrendingDown className="w-8 h-8 mx-auto mb-2 text-red-300" />
                  <div className="text-2xl font-bold">${totalExpenses.toFixed(2)}</div>
                  <div className="text-sm opacity-80">Total Expenses</div>
                </CardContent>
              </Card>
              
              <Card className={`glass-effect border-white/30 text-white ${profit > 0 ? 'animate-pulse-glow' : ''}`}>
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-2xl font-bold text-yellow-300">
                    ${profit.toFixed(2)}
                  </div>
                  <div className="text-sm opacity-80">Pure Profit 🚀</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Entry Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Button
            onClick={() => setShowVoiceModal(true)}
            className="h-20 bg-joy-gradient hover:scale-105 transition-all duration-300 joy-shadow"
            size="lg"
          >
            <Mic className="w-8 h-8 mr-3" />
            <div className="text-left">
              <div className="font-bold text-lg">Voice Entry</div>
              <div className="text-sm opacity-90">Say it, we'll track it!</div>
            </div>
          </Button>
          
          <Button
            onClick={() => setShowPhotoModal(true)}
            className="h-20 bg-profit-gradient hover:scale-105 transition-all duration-300 profit-glow"
            size="lg"
          >
            <Camera className="w-8 h-8 mr-3" />
            <div className="text-left">
              <div className="font-bold text-lg">Photo Entry</div>
              <div className="text-sm opacity-90">Snap receipts instantly!</div>
            </div>
          </Button>
        </div>

        {/* Daily Target Progress */}
        <Card className="mb-8 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardTitle className="flex items-center gap-2">
              <Target className="w-6 h-6" />
              Daily Profit Target: ${dailyTarget}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500 ease-out"
                    style={{ width: `${Math.min(targetProgress, 100)}%` }}
                  />
                </div>
              </div>
              <Badge variant={targetProgress >= 100 ? "default" : "secondary"} className="text-lg px-3 py-1">
                {targetProgress.toFixed(0)}%
              </Badge>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Current: ${profit.toFixed(2)}</span>
              <span>Remaining: ${Math.max(0, dailyTarget - profit).toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 w-full">
            <TabsTrigger value="transactions" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Transactions
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Smart Insights
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transactions">
            <TransactionList transactions={transactions} />
          </TabsContent>

          <TabsContent value="insights">
            <InsightsPanel 
              profit={profit}
              profitMargin={profitMargin}
              transactions={transactions}
            />
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  Business Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {profitMargin.toFixed(1)}%
                    </div>
                    <div className="text-green-700">Profit Margin</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {transactions.length}
                    </div>
                    <div className="text-blue-700">Total Transactions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      <VoiceEntryModal
        isOpen={showVoiceModal}
        onClose={() => setShowVoiceModal(false)}
        onAddTransaction={addTransaction}
      />
      
      <PhotoEntryModal
        isOpen={showPhotoModal}
        onClose={() => setShowPhotoModal(false)}
        onAddTransaction={addTransaction}
      />

      {/* Celebration Component */}
      {showCelebration && <ProfitCelebration />}
    </div>
  );
};

export default Index;
