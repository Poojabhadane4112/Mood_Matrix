import {
  Bell,
  BookOpen,
  Brain,
  ChevronRight,
  Clock3,
  GitBranch,
  Heart,
  Home,
  Lightbulb,
  Link2,
  Menu,
  Moon,
  PenLine,
  Settings,
  Sparkles,
  Smile,
  TrendingDown,
  TrendingUp,
  UserRound,
  X,
  Zap,
} from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useState } from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";

const trendData = [
  { day: "21 Sep", calm: 62, worried: 28, tired: 34, frustrated: 20 },
  { day: "22 Sep", calm: 64, worried: 35, tired: 42, frustrated: 25 },
  { day: "23 Sep", calm: 55, worried: 38, tired: 50, frustrated: 27 },
  { day: "24 Sep", calm: 59, worried: 31, tired: 46, frustrated: 25 },
  { day: "25 Sep", calm: 70, worried: 42, tired: 38, frustrated: 35 },
  { day: "26 Sep", calm: 76, worried: 36, tired: 30, frustrated: 31 },
  { day: "27 Sep", calm: 69, worried: 39, tired: 34, frustrated: 29 },
];

const insights = [
  {
    icon: TrendingDown,
    title: "Energy has been slightly lower",
    description: "compared with your recent baseline.",
  },
  {
    icon: Moon,
    title: "Sleep has appeared more often",
    description: "in your recent journal entries.",
  },
  {
    icon: BookOpen,
    title: "Academic workload",
    description: "appears frequently in your reflections.",
  },
  {
    icon: Link2,
    title: "Sleep and energy",
    description: "have appeared together several times.",
  },
];

const patterns = [
  {
    icon: Brain,
    title: "Academic Workload",
    description:
      "Mentions of deadlines and workload frequently appear alongside lower focus.",
    className: "purple",
    path: "/changes",
  },
  {
    icon: Moon,
    title: "Sleep & Energy",
    description:
      "Lower sleep duration and lower energy have appeared together in recent entries.",
    className: "blue",
    path: "/themes",
  },
  {
    icon: UserRound,
    title: "Social Connection",
    description:
      "Positive emotional language appears more often around social activities.",
    className: "green",
    path: "/themes",
  },
];

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="silent-spiral">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>

        <div className="brand">
          <div className="brand-mark">
            <Sparkles size={27} />
          </div>

          <div>
            <h2>The Silent Spiral</h2>
            <p>Notice · Understand · Reflect</p>
          </div>

          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">

          <p className="nav-heading">SPACE</p>

          <Link
            to="/"
            className="nav-item active"
            onClick={() => setSidebarOpen(false)}
          >
            <Home size={19} />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/journal"
            className="nav-item"
            onClick={() => setSidebarOpen(false)}
          >
            <PenLine size={19} />
            <span>Journal</span>
          </Link>

          <Link
            to="/check-in"
            className="nav-item"
            onClick={() => setSidebarOpen(false)}
          >
            <Smile size={19} />
            <span>Check-in</span>
          </Link>

          <p className="nav-heading patterns-heading">MY PATTERNS</p>

          {/* WHAT CHANGED */}
          <Link
            to="/changes"
            className="nav-item sub-item"
            onClick={() => setSidebarOpen(false)}
          >
            <GitBranch size={18} />
            <span>What Changed?</span>
          </Link>

          {/* RECURRING THEMES */}
          <Link
            to="/themes"
            className="nav-item sub-item"
            onClick={() => setSidebarOpen(false)}
          >
            <Heart size={18} />
            <span>Recurring Themes</span>
          </Link>

          <Link
            to="/relationships"
            className="nav-item sub-item"
            onClick={() => setSidebarOpen(false)}
          >
            <Link2 size={18} />
            <span>Relationships</span>
          </Link>

          <p className="nav-heading">EXPLORE</p>

          <Link
            to="/insights"
            className="nav-item"
            onClick={() => setSidebarOpen(false)}
          >
            <TrendingUp size={19} />
            <span>Insights</span>
          </Link>

          <Link
            to="/reflection"
            className="nav-item"
            onClick={() => setSidebarOpen(false)}
          >
            <Sparkles size={19} />
            <span>Reflection</span>
          </Link>

          <Link
            to="/timeline"
            className="nav-item"
            onClick={() => setSidebarOpen(false)}
          >
            <Clock3 size={19} />
            <span>Timeline</span>
          </Link>

          <Link
            to="/settings"
            className="nav-item"
            onClick={() => setSidebarOpen(false)}
          >
            <Settings size={19} />
            <span>Settings</span>
          </Link>

        </nav>

        <div className="sidebar-quote">
          <div className="quote-leaf">✦</div>

          <p>
            "Small changes in your daily life can tell a big story."
          </p>

          <span>— The Silent Spiral</span>
        </div>

      </aside>

      {/* MAIN AREA */}
      <main className="main-area">

        {/* TOPBAR */}
        <header className="topbar">

          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={21} />
          </button>

          <div className="mobile-brand">
            <Sparkles size={21} />
            <span>The Silent Spiral</span>
          </div>

          <div className="topbar-right">

            <button className="icon-button">
              <Bell size={19} />
              <span className="notification-dot" />
            </button>

            <div className="profile">

              <div className="profile-avatar">
                PB
              </div>

              <div className="profile-info">
                <strong>Pooja Bhadane</strong>
                <span>My space</span>
              </div>

              <ChevronRight size={15} />

            </div>

          </div>

        </header>

        {/* DASHBOARD CONTENT */}
        <div className="dashboard-content">

          {/* PAGE HEADER */}
          <section className="page-heading">

            <div>
              <p className="small-label">YOUR REFLECTION SPACE</p>

              <h1>
                Good evening, Pooja <span>👋</span>
              </h1>

              <p className="page-subtitle">
                Here's a snapshot of your recent patterns and insights.
              </p>
            </div>

            <div className="date-display">
              <Clock3 size={16} />
              <span>Sat, 27 Sep 2025</span>
            </div>

          </section>

          {/* STAT CARDS */}
          <section className="stats-grid">

            <StatCard
              icon={<Zap size={21} />}
              title="Energy"
              value="2.7"
              suffix="/ 5"
              change="14%"
              description="than your baseline"
              type="energy"
            />

            <StatCard
              icon={<Brain size={21} />}
              title="Focus"
              value="2.8"
              suffix="/ 5"
              change="9%"
              description="than your baseline"
              type="focus"
            />

            <StatCard
              icon={<Moon size={21} />}
              title="Sleep"
              value="5.9"
              suffix=" hrs"
              change="0.8 hrs"
              description="than your baseline"
              type="sleep"
            />

            <StatCard
              icon={<BookOpen size={21} />}
              title="Journal"
              value="2"
              suffix=" / week"
              change="50%"
              description="than your usual"
              type="journal"
            />

          </section>

          {/* MAIN GRID */}
          <section className="content-grid">

            {/* CENTER */}
            <div className="center-column">

              {/* EMOTIONAL TREND */}
              <section className="panel trend-panel">

                <div className="panel-header">

                  <div className="panel-title">

                    <div className="title-icon">
                      <Brain size={18} />
                    </div>

                    <div>
                      <h2>Emotional Trend</h2>
                      <p>
                        How your emotional signals have changed over the last
                        7 days
                      </p>
                    </div>

                  </div>

                  <Link to="/insights" className="view-button">
                    View Details
                    <ChevronRight size={15} />
                  </Link>

                </div>

                <div className="chart-wrapper">

                  <div className="chart-labels">
                    <span>Positive</span>
                    <span>Neutral</span>
                    <span>Negative</span>
                  </div>

                  <ResponsiveContainer width="100%" height={285}>

                    <AreaChart data={trendData}>

                      <defs>

                        <linearGradient
                          id="calmGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopOpacity={0.13}
                          />

                          <stop
                            offset="100%"
                            stopOpacity={0}
                          />

                        </linearGradient>

                      </defs>

                      <CartesianGrid
                        vertical
                        horizontal={false}
                        strokeDasharray="1 4"
                        opacity={0.35}
                      />

                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11 }}
                      />

                      <YAxis
                        domain={[0, 100]}
                        axisLine={false}
                        tickLine={false}
                        tick={false}
                        width={5}
                      />

                      <Tooltip />

                      <Area
                        type="monotone"
                        dataKey="calm"
                        strokeWidth={2.5}
                        fill="url(#calmGradient)"
                        stroke="var(--green)"
                      />

                      <Area
                        type="monotone"
                        dataKey="worried"
                        strokeWidth={2}
                        fill="none"
                        stroke="var(--orange)"
                      />

                      <Area
                        type="monotone"
                        dataKey="tired"
                        strokeWidth={2}
                        fill="none"
                        stroke="var(--blue)"
                      />

                      <Area
                        type="monotone"
                        dataKey="frustrated"
                        strokeWidth={2}
                        fill="none"
                        stroke="var(--red)"
                      />

                    </AreaChart>

                  </ResponsiveContainer>

                </div>

                <div className="trend-legend">

                  <LegendItem color="green" label="Calm" value="32%" />
                  <LegendItem color="orange" label="Worried" value="21%" />
                  <LegendItem color="red" label="Frustrated" value="16%" />
                  <LegendItem color="blue" label="Tired" value="12%" />

                </div>

              </section>

              {/* PATTERNS */}
              <section className="panel">

                <div className="panel-header">

                  <div className="panel-title">

                    <div className="title-icon">
                      <GitBranch size={18} />
                    </div>

                    <div>
                      <h2>Your Patterns</h2>
                      <p>Key patterns detected from your reflections</p>
                    </div>

                  </div>

                </div>

                <div className="pattern-grid">

                  {patterns.map((pattern) => {

                    const Icon = pattern.icon;

                    return (
                      <article
                        className={`pattern-card ${pattern.className}`}
                        key={pattern.title}
                      >

                        <div className="pattern-icon">
                          <Icon size={20} />
                        </div>

                        <h3>{pattern.title}</h3>

                        <p>{pattern.description}</p>

                        <Link to={pattern.path} className="pattern-explore">
                          Explore
                          <ChevronRight size={14} />
                        </Link>

                      </article>
                    );

                  })}

                </div>

              </section>

              {/* TIMELINE */}
              <section className="panel timeline-panel">

                <div className="panel-header">

                  <div className="panel-title">

                    <div className="title-icon">
                      <Clock3 size={18} />
                    </div>

                    <div>
                      <h2>Your Timeline</h2>
                      <p>
                        A visual summary of your emotional journey
                      </p>
                    </div>

                  </div>

                  <Link to="/timeline" className="view-button">
                    View Full Timeline
                    <ChevronRight size={15} />
                  </Link>

                </div>

                <div className="timeline">

                  <TimelineItem
                    date="Sep 20"
                    emotion="Calm"
                    icon="🙂"
                    color="green"
                  />

                  <TimelineItem
                    date="Sep 22"
                    emotion="Tired"
                    icon="😴"
                    color="blue"
                  />

                  <TimelineItem
                    date="Sep 24"
                    emotion="Worried"
                    icon="😟"
                    color="orange"
                  />

                  <TimelineItem
                    date="Sep 26"
                    emotion="Frustrated"
                    icon="😕"
                    color="purple"
                  />

                  <TimelineItem
                    date="Sep 27"
                    emotion="Calm"
                    icon="🙂"
                    color="green"
                  />

                </div>

              </section>

              {/* FOOTER MESSAGE */}
              <div className="gentle-footer">

                <div className="footer-icon">
                  <Sparkles size={18} />
                </div>

                <div>
                  <strong>Your story matters.</strong>

                  <p>
                    This space is for you — to understand, reflect and grow,
                    at your own pace.
                  </p>
                </div>

                <span className="footer-script">
                  You got this ♡
                </span>

              </div>

            </div>

            {/* RIGHT COLUMN */}
            <aside className="right-column">

              {/* QUICK INSIGHTS */}
              <section className="side-panel">

                <div className="side-title">
                  <Lightbulb size={19} />
                  <h2>Quick Insights</h2>
                </div>

                <div className="quick-insights">

                  {insights.map((item, index) => {

                    const Icon = item.icon;

                    return (
                      <Link
                        to="/insights"
                        className="quick-insight"
                        key={index}
                      >

                        <div className={`insight-icon insight-${index}`}>
                          <Icon size={18} />
                        </div>

                        <div className="insight-text">
                          <strong>{item.title}</strong>
                          <span>{item.description}</span>
                        </div>

                        <ChevronRight size={16} />

                      </Link>
                    );

                  })}

                </div>

                <Link
                  to="/themes"
                  className="all-patterns-button"
                >
                  View All Patterns
                  <ChevronRight size={15} />
                </Link>

              </section>

              {/* CHANGE INDEX */}
              <section className="side-panel">

                <div className="side-title">

                  <TrendingUp size={19} />

                  <div>
                    <h2>Pattern Change Index</h2>

                    <p>
                      How much your recent patterns differ from your baseline
                    </p>
                  </div>

                </div>

                <div className="change-list">

                  <ChangeBar
                    name="Energy"
                    value="High"
                    width="78%"
                    type="high"
                  />

                  <ChangeBar
                    name="Focus"
                    value="Moderate"
                    width="55%"
                    type="moderate"
                  />

                  <ChangeBar
                    name="Sleep"
                    value="Moderate"
                    width="48%"
                    type="sleep"
                  />

                  <ChangeBar
                    name="Journal Frequency"
                    value="Mild"
                    width="34%"
                    type="mild"
                  />

                  <ChangeBar
                    name="Routine Consistency"
                    value="Low"
                    width="27%"
                    type="low"
                  />

                </div>

                <Link
                  to="/changes"
                  className="all-patterns-button"
                >
                  See What Changed
                  <ChevronRight size={15} />
                </Link>

              </section>

              {/* REFLECTION */}
              <section className="reflection-panel">

                <div className="reflection-heading">
                  <Sparkles size={18} />
                  <h2>Reflection Companion</h2>
                </div>

                <div className="reflection-body">

                  <div className="reflection-plant">
                    <div className="plant-face">
                      •ᴗ•
                    </div>

                    <span>🌿</span>
                  </div>

                  <div className="reflection-bubble">

                    You've mentioned feeling mentally tired and overwhelmed
                    in your recent entries.

                    <strong>
                      What has been taking most of your mental space lately?
                    </strong>

                  </div>

                </div>

                <Link
                  to="/reflection"
                  className="reflection-button"
                >
                  Start Reflecting
                  <ChevronRight size={16} />
                </Link>

              </section>

            </aside>

          </section>

        </div>

      </main>

    </div>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function StatCard({
  icon,
  title,
  value,
  suffix,
  change,
  description,
  type,
}) {
  return (
    <div className={`stat-card stat-${type}`}>

      <div className="stat-icon">
        {icon}
      </div>

      <p>{title}</p>

      <div className="stat-value">
        {value}
        <span>{suffix}</span>
      </div>

      <div className="stat-change">
        <TrendingDown size={14} />
        {change}
        <span>{description}</span>
      </div>

    </div>
  );
}


function LegendItem({ color, label, value }) {
  return (
    <div className="legend-item">

      <span className={`legend-circle ${color}`} />

      <span>{label}</span>

      <strong>{value}</strong>

    </div>
  );
}


function TimelineItem({ date, emotion, icon, color }) {
  return (
    <div className="timeline-item">

      <div className={`timeline-icon ${color}`}>
        {icon}
      </div>

      <div className="timeline-line" />

      <span className="timeline-date">
        {date}
      </span>

      <strong>{emotion}</strong>

    </div>
  );
}


function ChangeBar({ name, value, width, type }) {
  return (
    <div className="change-item">

      <div className="change-header">
        <span>{name}</span>

        <strong className={type}>
          {value}
        </strong>
      </div>

      <div className="change-track">

        <div
          className={`change-fill ${type}`}
          style={{ width }}
        />

      </div>

    </div>
  );
}


export default Dashboard;