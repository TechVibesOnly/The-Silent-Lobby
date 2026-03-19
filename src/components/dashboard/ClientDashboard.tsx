import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Search, 
  BarChart3, 
  Zap, 
  FileText, 
  Settings, 
  ArrowUpRight, 
  ArrowDownRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from 'recharts';
import { clsx } from 'clsx';

const scoreHistory = [
  { date: 'Oct 23', score: 420, trust: 30, api: 20, logic: 15, data: 50, monitoring: 5 },
  { date: 'Nov 23', score: 450, trust: 35, api: 25, logic: 18, data: 55, monitoring: 8 },
  { date: 'Dec 23', score: 580, trust: 50, api: 40, logic: 30, data: 70, monitoring: 15 },
  { date: 'Jan 24', score: 720, trust: 65, api: 60, logic: 45, data: 85, monitoring: 25 },
  { date: 'Feb 24', score: 810, trust: 75, api: 70, logic: 60, data: 90, monitoring: 40 },
  { date: 'Mar 24', score: 847, trust: 82, api: 78, logic: 68, data: 95, monitoring: 55 },
];

const agentRankings = [
  { platform: 'Salesforce Agentforce', visibility: '91%', rank: '#3', change: '+2', status: 'Excellent', color: '#4ADE80' },
  { platform: 'Microsoft Copilot', visibility: '84%', rank: '#7', change: '+5', status: 'Good', color: '#EAB308' },
  { platform: 'SAP Joule', visibility: '76%', rank: '#12', change: '-1', status: 'Good', color: '#EAB308' },
  { platform: 'ChatGPT Agent Mode', visibility: '68%', rank: '#18', change: '+3', status: 'Average', color: '#F97316' },
  { platform: 'Gemini Procurement', visibility: '71%', rank: '#15', change: '+8', status: 'Good', color: '#EAB308' },
];

const recommendations = [
  { id: 1, dimension: 'Logic Gate', action: 'Deploy JSON-LD Pricing Schema', priority: 'HIGH', impact: 'Critical' },
  { id: 2, dimension: 'API Design', action: 'Update OpenAPI 3.1 Specification', priority: 'HIGH', impact: 'High' },
  { id: 3, dimension: 'Agent Trust', action: 'Verify SOC2 Compliance Registry', priority: 'MEDIUM', impact: 'Medium' },
  { id: 4, dimension: 'Structured Data', action: 'Optimize Product Availability Tags', priority: 'LOW', impact: 'Low' },
];

export const ClientDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('alto-score');

  const navItems = [
    { id: 'alto-score', label: 'ALTO Score', icon: LayoutDashboard },
    { id: 'agent-rankings', label: 'Agent Rankings', icon: Search },
    { id: 'competitors', label: 'Competitor Analysis', icon: BarChart3 },
    { id: 'recommendations', label: 'Recommendations', icon: Zap },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-[#050505] text-white font-sans selection:bg-gold selection:text-black">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0A0A0A] fixed h-full z-30 hidden md:block">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center font-display font-bold text-black">
              S
            </div>
            <span className="font-display font-bold text-lg tracking-tighter">
              THE SILENT <span className="text-gold">LOBBY</span>
            </span>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={clsx(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  activeTab === item.id 
                    ? "bg-gold/10 text-gold border border-gold/20" 
                    : "text-white/40 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8 md:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-display font-bold mb-2">Welcome back, Acme Corp</h1>
            <p className="text-white/40 text-sm font-mono uppercase tracking-widest">Client ID: SL-7829-X · Last updated: 2 mins ago</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Live Monitoring Active</span>
            </div>
            <button className="gold-gradient text-black font-bold px-6 py-2 rounded-full text-sm">
              Generate Report
            </button>
          </div>
        </header>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard 
            label="Current ALTO Score" 
            value="847" 
            subValue="/ 1000"
            trend="+12%" 
            trendUp={true} 
            icon={LayoutDashboard}
          />
          <MetricCard 
            label="Agent Recommendation Rate" 
            value="34%" 
            trend="+5%" 
            trendUp={true} 
            icon={Search}
          />
          <MetricCard 
            label="Platforms Monitored" 
            value="10" 
            subValue="/ 10"
            icon={BarChart3}
          />
          <MetricCard 
            label="Active Recommendations" 
            value="8" 
            trend="Pending" 
            trendUp={false} 
            icon={Zap}
            warning={true}
          />
        </div>

        {/* Score History Chart */}
        <div className="glass-card p-8 mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-display font-bold">ALTO Score History</h3>
              <p className="text-white/40 text-xs">6-month visibility performance across all dimensions</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span className="text-[10px] font-mono text-white/40 uppercase">Overall</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400" />
                <span className="text-[10px] font-mono text-white/40 uppercase">Trust</span>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scoreHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  stroke="rgba(255,255,255,0.2)" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.2)" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '12px', fontFamily: 'Inter' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', paddingTop: '20px' }} />
                <Line type="monotone" dataKey="score" stroke="#C9A84C" strokeWidth={3} dot={{ r: 4, fill: '#C9A84C' }} activeDot={{ r: 6 }} name="Overall ALTO" />
                <Line type="monotone" dataKey="trust" stroke="#7CB9E8" strokeWidth={2} dot={false} name="Agent Trust" />
                <Line type="monotone" dataKey="api" stroke="#4ADE80" strokeWidth={2} dot={false} name="API Design" />
                <Line type="monotone" dataKey="logic" stroke="#F59E0B" strokeWidth={2} dot={false} name="Logic Gate" />
                
                <ReferenceLine x="Dec 23" stroke="rgba(201,168,76,0.3)" strokeDasharray="3 3" label={{ position: 'top', value: 'JSON-LD Deployed', fill: 'rgba(255,255,255,0.4)', fontSize: 8 }} />
                <ReferenceLine x="Feb 24" stroke="rgba(201,168,76,0.3)" strokeDasharray="3 3" label={{ position: 'top', value: 'OpenAPI Spec Added', fill: 'rgba(255,255,255,0.4)', fontSize: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Agent Rankings Table */}
          <div className="glass-card p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold">Agent Rankings</h3>
              <button className="text-[10px] font-mono text-gold uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-white/5">
                    <th className="pb-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">Platform</th>
                    <th className="pb-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">Visibility</th>
                    <th className="pb-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">Rank</th>
                    <th className="pb-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {agentRankings.map((agent, i) => (
                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-xs">
                            {agent.platform[0]}
                          </div>
                          <span className="text-sm font-medium">{agent.platform}</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-mono">{agent.visibility}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold">{agent.rank}</span>
                          <span className={clsx(
                            "text-[10px] font-mono",
                            agent.change.startsWith('+') ? "text-green-400" : "text-red-400"
                          )}>{agent.change}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: agent.color }} />
                          <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: agent.color }}>{agent.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Active Recommendations */}
          <div className="glass-card p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold">Active Recommendations</h3>
              <span className="px-2 py-1 bg-red-500/10 text-red-400 text-[10px] font-mono rounded">8 PENDING</span>
            </div>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {recommendations.map((rec) => (
                <div key={rec.id} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-gold/30 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono text-white/40 uppercase">{rec.dimension}</span>
                    <span className={clsx(
                      "px-2 py-0.5 rounded text-[8px] font-mono font-bold",
                      rec.priority === 'HIGH' ? "bg-red-500/20 text-red-400" : "bg-blue-500/20 text-blue-400"
                    )}>{rec.priority}</span>
                  </div>
                  <h4 className="text-sm font-medium mb-4">{rec.action}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-white/20 uppercase">Impact: <span className="text-white/60">{rec.impact}</span></span>
                    <button className="text-[10px] font-mono text-gold uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Mark Complete <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface MetricCardProps {
  label: string;
  value: string;
  subValue?: string;
  trend?: string;
  trendUp?: boolean;
  icon: any;
  warning?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, subValue, trend, trendUp, icon: Icon, warning }) => (
  <div className="glass-card p-6 border-white/5 hover:border-white/10 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
        <Icon className="w-5 h-5" />
      </div>
      {trend && (
        <div className={clsx(
          "flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-mono font-bold",
          warning ? "bg-red-500/10 text-red-400" : trendUp ? "bg-green-500/10 text-green-400" : "bg-white/5 text-white/40"
        )}>
          {trendUp ? <ArrowUpRight className="w-3 h-3" /> : trendUp === false && !warning ? <ArrowDownRight className="w-3 h-3" /> : null}
          {trend}
        </div>
      )}
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-mono font-bold">{value}</span>
      {subValue && <span className="text-sm text-white/20 font-mono">{subValue}</span>}
    </div>
    <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-1">{label}</p>
  </div>
);
