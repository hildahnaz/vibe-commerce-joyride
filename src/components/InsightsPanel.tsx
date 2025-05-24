
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Lightbulb, Target, TrendingUp, AlertCircle } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  timestamp: Date;
}

interface InsightsPanelProps {
  profit: number;
  profitMargin: number;
  transactions: Transaction[];
}

const InsightsPanel: React.FC<InsightsPanelProps> = ({ profit, profitMargin, transactions }) => {
  // Generate smart insights
  const insights = React.useMemo(() => {
    const insights = [];
    
    if (profit > 100) {
      insights.push({
        type: 'success',
        icon: TrendingUp,
        title: 'Great Profit Day!',
        description: `You've made $${profit.toFixed(2)} in profit. Keep up the excellent work!`,
        action: 'Consider reinvesting some profit into inventory or marketing.'
      });
    }
    
    if (profitMargin > 50) {
      insights.push({
        type: 'success',
        icon: Target,
        title: 'Excellent Profit Margin',
        description: `Your ${profitMargin.toFixed(1)}% profit margin is outstanding!`,
        action: 'This is sustainable - maintain your current pricing strategy.'
      });
    } else if (profitMargin < 20 && profitMargin > 0) {
      insights.push({
        type: 'warning',
        icon: AlertCircle,
        title: 'Low Profit Margin',
        description: `Your ${profitMargin.toFixed(1)}% margin could be improved.`,
        action: 'Consider reducing costs or increasing prices strategically.'
      });
    }
    
    // Category analysis
    const categorySpending = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {} as Record<string, number>);
    
    const highestCategory = Object.entries(categorySpending)
      .sort(([,a], [,b]) => b - a)[0];
    
    if (highestCategory && highestCategory[1] > 50) {
      insights.push({
        type: 'info',
        icon: Brain,
        title: 'Top Expense Category',
        description: `${highestCategory[0]} is your biggest expense at $${highestCategory[1].toFixed(2)}.`,
        action: 'Monitor this category closely and look for optimization opportunities.'
      });
    }
    
    return insights;
  }, [profit, profitMargin, transactions]);

  const tips = [
    "🎯 Track every small expense - they add up quickly!",
    "💡 Set daily profit targets to stay motivated",
    "📊 Review your top categories weekly for optimization",
    "🚀 Celebrate small wins to maintain momentum",
    "💰 Keep 20% of profits as emergency funds"
  ];

  return (
    <div className="space-y-6">
      {/* AI Insights */}
      <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Brain className="w-6 h-6" />
            AI-Powered Business Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {insights.length > 0 ? (
            insights.map((insight, index) => (
              <div key={index} className="p-4 bg-white/70 rounded-lg border">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${
                    insight.type === 'success' ? 'bg-green-100 text-green-600' :
                    insight.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    <insight.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {insight.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {insight.description}
                    </p>
                    <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      💡 {insight.action}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Start tracking transactions to unlock AI insights!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-600">
            <Lightbulb className="w-6 h-6" />
            Pro Tips for Success
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                <div className="text-orange-500 font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-600">Achievement Badges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {profit > 0 && (
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                🎯 Profitable Day
              </Badge>
            )}
            {profitMargin > 30 && (
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                💎 High Margin Hero
              </Badge>
            )}
            {transactions.length >= 5 && (
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                📊 Active Tracker
              </Badge>
            )}
            {transactions.filter(t => t.type === 'income').length >= 3 && (
              <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                🚀 Sales Star
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsightsPanel;
