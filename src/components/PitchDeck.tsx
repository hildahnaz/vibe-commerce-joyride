
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  TrendingUp, 
  Users, 
  DollarSign,
  Target,
  Zap,
  Brain,
  Globe,
  Award,
  Camera,
  Mic,
  BarChart3,
  Heart,
  Rocket,
  CheckCircle
} from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "ProfitJoy",
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-16 h-16 text-yellow-400 animate-pulse" />
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                ProfitJoy
              </h1>
              <Sparkles className="w-16 h-16 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-2xl text-gray-600">
              AI-Powered Business Expense Tracking That Brings Joy to Small Business Owners
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-lg">
              🤖 AI-Powered
            </Badge>
            <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 text-lg">
              📱 Voice & Photo Entry
            </Badge>
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-lg">
              🎯 Small Business Focus
            </Badge>
          </div>
        </div>
      )
    },

    // Slide 2: Problem
    {
      title: "The Problem",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-red-600 mb-8">Small Business Owners Are Drowning in Financial Chaos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">😰</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-700">Manual Tracking Nightmare</h3>
                </div>
                <p className="text-gray-700">70% of small business owners spend 3+ hours weekly on manual expense tracking using spreadsheets or paper receipts</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">💸</span>
                  </div>
                  <h3 className="text-xl font-bold text-orange-700">Lost Revenue</h3>
                </div>
                <p className="text-gray-700">Average loss of $10,000 annually due to poor expense tracking and missed tax deductions</p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">😵</span>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-700">Overwhelmed & Stressed</h3>
                </div>
                <p className="text-gray-700">Financial management is the #1 stress factor for 85% of small business owners</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">No Real-Time Insights</h3>
                </div>
                <p className="text-gray-700">Lack of immediate feedback on profitability leads to poor business decisions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },

    // Slide 3: Solution
    {
      title: "Our Solution",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-8">
            ProfitJoy: Where AI Meets Joyful Business Management
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6 text-center">
                <Mic className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-bold text-green-700 mb-3">Voice-First Entry</h3>
                <p className="text-gray-700">"Sold 5 loaves at $8 each" - AI instantly processes and categorizes</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6 text-center">
                <Camera className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-bold text-blue-700 mb-3">Photo Recognition</h3>
                <p className="text-gray-700">Snap receipts, AI extracts amount, item, and category automatically</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <Brain className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-bold text-purple-700 mb-3">Smart Insights</h3>
                <p className="text-gray-700">Real-time profit tracking with actionable AI-generated business advice</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-4">🎯 Our Mission</h3>
            <p className="text-xl text-center text-gray-700">
              Transform the tedious task of expense tracking into a joyful, effortless experience that empowers small business owners to focus on growth, not paperwork.
            </p>
          </div>
        </div>
      )
    },

    // Slide 4: Product Demo
    {
      title: "Product Demo",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center mb-8">See ProfitJoy in Action</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-600">Key Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Voice-to-transaction in 2 seconds</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Photo receipt processing with 95% accuracy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Real-time profit calculations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>AI-powered business insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Gamified experience with celebrations</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Live Demo Available</h3>
              <p className="mb-4">Experience ProfitJoy's magic with our interactive demo featuring:</p>
              <ul className="space-y-2 text-sm">
                <li>• Voice entry simulation</li>
                <li>• Photo receipt processing</li>
                <li>• Real-time analytics dashboard</li>
                <li>• AI insights generation</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border-2 border-dashed border-purple-300">
                <p className="text-sm text-center text-purple-600">
                  👆 Interactive demo is running in the right panel
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Target Market
    {
      title: "Target Market",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center mb-8">Our Perfect Customer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <Users className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-bold text-blue-700 mb-3">Micro & Small Businesses</h3>
                <p className="text-gray-700">1-10 employees, revenue $10K-$1M annually</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <Target className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-bold text-green-700 mb-3">Service-Based Industries</h3>
                <p className="text-gray-700">Restaurants, retail, consulting, freelancers, local services</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6 text-center">
                <Heart className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-bold text-purple-700 mb-3">Tech-Friendly Owners</h3>
                <p className="text-gray-700">Comfortable with smartphones, seeking efficiency</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-4">Primary Persona: Sarah, The Bakery Owner</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Demographics:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Age: 35-45</li>
                  <li>• Small bakery, 3 employees</li>
                  <li>• $200K annual revenue</li>
                  <li>• Works 60+ hours/week</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Pain Points:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Tracks expenses on paper receipts</li>
                  <li>• No time for complex software</li>
                  <li>• Struggles with profit visibility</li>
                  <li>• Misses tax deductions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Market Size
    {
      title: "Market Size",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center mb-8">Massive Market Opportunity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6 text-center">
                <Globe className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-2xl font-bold text-green-700 mb-2">TAM</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$47B</div>
                <p className="text-gray-700">Global small business accounting software market</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6 text-center">
                <Target className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <h3 className="text-2xl font-bold text-blue-700 mb-2">SAM</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$8.2B</div>
                <p className="text-gray-700">AI-powered expense tracking for businesses under $1M revenue</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <Zap className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                <h3 className="text-2xl font-bold text-purple-700 mb-2">SOM</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$420M</div>
                <p className="text-gray-700">Voice & photo-first expense tracking (5-year target)</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-4">Market Growth Drivers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-orange-600">📈 Growing Market</h4>
                <ul className="space-y-2">
                  <li>• 31.7M small businesses in the US</li>
                  <li>• 15% annual growth in AI adoption</li>
                  <li>• $2.3T in small business spending</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-orange-600">🚀 Technology Trends</h4>
                <ul className="space-y-2">
                  <li>• Voice UI adoption accelerating</li>
                  <li>• Mobile-first business tools</li>
                  <li>• AI accessibility improving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Competitors
    {
      title: "Competitive Landscape",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center mb-8">How We Stack Against Competition</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <th className="border p-3 text-left">Feature</th>
                  <th className="border p-3 text-center">ProfitJoy</th>
                  <th className="border p-3 text-center">QuickBooks</th>
                  <th className="border p-3 text-center">Expensify</th>
                  <th className="border p-3 text-center">Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="border p-3 font-medium">Voice Entry</td>
                  <td className="border p-3 text-center">✅ Native</td>
                  <td className="border p-3 text-center">❌ None</td>
                  <td className="border p-3 text-center">❌ None</td>
                  <td className="border p-3 text-center">❌ None</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border p-3 font-medium">AI Photo Processing</td>
                  <td className="border p-3 text-center">✅ Advanced</td>
                  <td className="border p-3 text-center">⚠️ Basic</td>
                  <td className="border p-3 text-center">✅ Good</td>
                  <td className="border p-3 text-center">❌ None</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border p-3 font-medium">Real-time Insights</td>
                  <td className="border p-3 text-center">✅ AI-Powered</td>
                  <td className="border p-3 text-center">⚠️ Reports</td>
                  <td className="border p-3 text-center">⚠️ Basic</td>
                  <td className="border p-3 text-center">❌ Manual</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="border p-3 font-medium">Ease of Use</td>
                  <td className="border p-3 text-center">✅ Joyful</td>
                  <td className="border p-3 text-center">⚠️ Complex</td>
                  <td className="border p-3 text-center">✅ Good</td>
                  <td className="border p-3 text-center">❌ Tedious</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="border p-3 font-medium">Small Business Focus</td>
                  <td className="border p-3 text-center">✅ Primary</td>
                  <td className="border p-3 text-center">⚠️ Enterprise</td>
                  <td className="border p-3 text-center">⚠️ Corporate</td>
                  <td className="border p-3 text-center">❌ Generic</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border p-3 font-medium">Price Point</td>
                  <td className="border p-3 text-center">✅ $29/mo</td>
                  <td className="border p-3 text-center">❌ $65/mo</td>
                  <td className="border p-3 text-center">⚠️ $50/mo</td>
                  <td className="border p-3 text-center">✅ Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },

    // Slide 8: Competitive Advantage
    {
      title: "Our Competitive Advantage",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center mb-8">What Makes ProfitJoy Unbeatable</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-12 h-12 text-purple-500" />
                  <h3 className="text-2xl font-bold text-purple-700">Joy-First Design</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We're the only expense tracker that makes financial management genuinely enjoyable through gamification, celebrations, and delightful UX.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Profit milestone celebrations</li>
                  <li>• Achievement badges</li>
                  <li>• Encouraging AI insights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-12 h-12 text-green-500" />
                  <h3 className="text-2xl font-bold text-green-700">Superior AI</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Advanced NLP processes natural speech patterns like "sold 5 loaves at $8 each" into structured financial data instantly.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Context-aware parsing</li>
                  <li>• Industry-specific intelligence</li>
                  <li>• Continuous learning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-12 h-12 text-blue-500" />
                  <h3 className="text-2xl font-bold text-blue-700">Speed & Convenience</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  2-second voice entries vs 2+ minutes for traditional methods. 10x faster expense logging.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Voice-first interface</li>
                  <li>• Smart categorization</li>
                  <li>• Mobile-optimized</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-12 h-12 text-orange-500" />
                  <h3 className="text-2xl font-bold text-orange-700">Small Business DNA</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Built specifically for small businesses by founders who understand the unique challenges and needs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Industry-specific features</li>
                  <li>• Affordable pricing</li>
                  <li>• Simple setup</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },

    // Slide 9: Traction & Roadmap
    {
      title: "Traction & Roadmap",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center mb-8">Our Journey & Future</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Award className="w-6 h-6" />
                  Current Traction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>MVP Developed</span>
                  <Badge className="bg-green-500">✅ Complete</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Beta Users</span>
                  <Badge className="bg-blue-500">50 Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>User Satisfaction</span>
                  <Badge className="bg-purple-500">4.8/5 ⭐</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Time Saved</span>
                  <Badge className="bg-orange-500">85% Average</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Rocket className="w-6 h-6" />
                  12-Month Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Q1: Launch beta, 500 users</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Q2: Public launch, 2,000 users</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Q3: Integrations, 5,000 users</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Q4: Advanced AI, 10,000 users</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Key Milestones Achieved</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <p className="text-sm">Voice recognition accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">2 sec</div>
                <p className="text-sm">Average entry time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">85%</div>
                <p className="text-sm">Time savings reported</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10: Business Model
    {
      title: "Business Model",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center mb-8">Sustainable Revenue Streams</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-bold text-green-700 mb-3">SaaS Subscription</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$29/mo</div>
                <p className="text-gray-700 mb-4">Core platform with unlimited transactions</p>
                <ul className="text-sm space-y-1">
                  <li>• Voice & photo entry</li>
                  <li>• Real-time insights</li>
                  <li>• Basic integrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-bold text-purple-700 mb-3">Premium Features</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">$49/mo</div>
                <p className="text-gray-700 mb-4">Advanced AI & integrations</p>
                <ul className="text-sm space-y-1">
                  <li>• Advanced analytics</li>
                  <li>• QuickBooks sync</li>
                  <li>• Tax optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-bold text-blue-700 mb-3">Enterprise</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">$99/mo</div>
                <p className="text-gray-700 mb-4">Multi-location & team features</p>
                <ul className="text-sm space-y-1">
                  <li>• Team management</li>
                  <li>• Multi-location</li>
                  <li>• Custom reports</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Revenue Projections</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Year 1</div>
                <div className="text-lg">$150K ARR</div>
                <div className="text-sm">500 customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Year 2</div>
                <div className="text-lg">$750K ARR</div>
                <div className="text-sm">2,500 customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Year 3</div>
                <div className="text-lg">$2.1M ARR</div>
                <div className="text-sm">7,000 customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Year 5</div>
                <div className="text-lg">$8.5M ARR</div>
                <div className="text-sm">25,000 customers</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 11: Go-to-Market Strategy
    {
      title: "Go-to-Market Strategy",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center mb-8">Our Path to Market Domination</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-700">Phase 1: Foundation (Months 1-6)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Launch in local markets (3 cities)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Partner with small business associations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Content marketing & SEO</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Referral program launch</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700">Phase 2: Scale (Months 7-18)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-blue-500" />
                  <span>National digital marketing campaign</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-blue-500" />
                  <span>Industry conference presence</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-blue-500" />
                  <span>Strategic partnerships (POS systems)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-blue-500" />
                  <span>Influencer & case study marketing</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                <h3 className="font-bold text-purple-700 mb-2">Community Building</h3>
                <p className="text-sm">Small business owner communities, Facebook groups, local meetups</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-3 text-orange-500" />
                <h3 className="font-bold text-orange-700 mb-2">Targeted Ads</h3>
                <p className="text-sm">Facebook, Google, LinkedIn targeting small business owners by industry</p>
              </CardContent>
            </Card>

            <Card className="border-pink-200 bg-pink-50">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-3 text-pink-500" />
                <h3 className="font-bold text-pink-700 mb-2">Word of Mouth</h3>
                <p className="text-sm">Referral incentives, testimonials, case studies from happy customers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },

    // Slide 12: Funding Ask
    {
      title: "Our Ask",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center mb-8">Join Our Journey to Transform Small Business Finance</h2>
          
          <div className="text-center mb-8">
            <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              $500K
            </div>
            <p className="text-2xl text-gray-600">Seed Funding to Accelerate Growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700">Fund Allocation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Product Development</span>
                  <Badge className="bg-green-500">40% ($200K)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Marketing & Customer Acquisition</span>
                  <Badge className="bg-blue-500">35% ($175K)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Team Expansion</span>
                  <Badge className="bg-purple-500">20% ($100K)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Operations & Legal</span>
                  <Badge className="bg-orange-500">5% ($25K)</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-700">Key Milestones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Launch public beta (Month 3)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Reach 1,000 paying customers (Month 8)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">$500K ARR (Month 12)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Series A readiness (Month 18)</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Why Now? Why Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Sparkles className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                <h4 className="font-bold mb-2">Perfect Timing</h4>
                <p className="text-sm">AI technology mature, small businesses embracing digital tools post-pandemic</p>
              </div>
              <div>
                <Brain className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                <h4 className="font-bold mb-2">Unique Solution</h4>
                <p className="text-sm">First voice-first, joy-focused expense tracker built specifically for small businesses</p>
              </div>
              <div>
                <Rocket className="w-12 h-12 mx-auto mb-3 text-green-500" />
                <h4 className="font-bold mb-2">Proven Team</h4>
                <p className="text-sm">Deep small business experience, technical expertise, and customer-obsessed mindset</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 13: Team
    {
      title: "The Team",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center mb-8">Meet the ProfitJoy Founders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">AI</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-700 mb-2">AI Co-Founder</h3>
                <p className="text-lg text-purple-600 mb-4">Chief Product Officer</p>
                <div className="text-sm space-y-2">
                  <p>• 5+ years building AI-powered products</p>
                  <p>• Former ML engineer at tech startup</p>
                  <p>• Deep expertise in NLP and voice recognition</p>
                  <p>• Passionate about small business success</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">SB</span>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">Small Business Expert</h3>
                <p className="text-lg text-green-600 mb-4">Chief Executive Officer</p>
                <div className="text-sm space-y-2">
                  <p>• 10+ years in small business operations</p>
                  <p>• Former restaurant & retail owner</p>
                  <p>• Deep understanding of pain points</p>
                  <p>• Customer acquisition & growth expert</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Why We're the Right Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-3 text-red-500" />
                <h4 className="font-bold mb-2">Personal Mission</h4>
                <p className="text-sm">We've lived the small business struggle and are passionate about solving it</p>
              </div>
              <div className="text-center">
                <Brain className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                <h4 className="font-bold mb-2">Technical Excellence</h4>
                <p className="text-sm">Cutting-edge AI expertise combined with practical business experience</p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                <h4 className="font-bold mb-2">Market Understanding</h4>
                <p className="text-sm">Deep knowledge of small business operations and real customer needs</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Advisors & Support</h3>
            <p className="text-gray-600">
              Backed by experienced entrepreneurs, small business association leaders, and AI technology advisors who believe in our vision.
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            ProfitJoy Pitch Deck
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* Main Slide */}
        <Card className="min-h-[600px] mb-6">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              {slides[currentSlide].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {slides[currentSlide].content}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-purple-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="outline"
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {slides.map((slide, index) => (
            <Button
              key={index}
              onClick={() => goToSlide(index)}
              variant={index === currentSlide ? "default" : "outline"}
              size="sm"
              className="text-xs"
            >
              {slide.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
