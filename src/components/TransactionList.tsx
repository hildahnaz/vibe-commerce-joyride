
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  timestamp: Date;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  if (transactions.length === 0) {
    return (
      <Card className="text-center py-12">
        <CardContent>
          <div className="text-gray-400 mb-4">
            <Clock className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No transactions yet
          </h3>
          <p className="text-gray-500">
            Start tracking by using voice or photo entry above! 🚀
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-500" />
            Recent Transactions
          </CardTitle>
        </CardHeader>
      </Card>

      {transactions.map((transaction) => (
        <Card 
          key={transaction.id} 
          className={`transition-all duration-300 hover:shadow-lg ${
            transaction.type === 'income' 
              ? 'border-l-4 border-l-green-500 bg-green-50/50' 
              : 'border-l-4 border-l-red-500 bg-red-50/50'
          }`}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'income' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {transaction.type === 'income' ? (
                    <TrendingUp className="w-5 h-5" />
                  ) : (
                    <TrendingDown className="w-5 h-5" />
                  )}
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800">
                    {transaction.description}
                  </div>
                  <div className="text-sm text-gray-500">
                    {transaction.timestamp.toLocaleTimeString()} • {transaction.category}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className={`text-xl font-bold ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </div>
                <Badge 
                  variant={transaction.type === 'income' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {transaction.type === 'income' ? '💰 Income' : '💸 Expense'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TransactionList;
