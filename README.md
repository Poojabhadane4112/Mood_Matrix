# Mood_Matrix
AI-powered personal pattern discovery and reflection companion.

Problem Statement

People often experience changes in their emotions, energy, focus, routines, relationships, workload, sleep, and daily experiences, but these changes can be difficult to recognize when viewed one day at a time.

Traditional mood-tracking applications generally depend on:

Fixed mood scales
Emoji-based selections
Simple numerical ratings
Manually entered categories
Basic charts

These approaches can record how someone feels at a particular moment, but they may not provide enough context to understand why certain patterns repeatedly appear.

For example, a user may write:

"I've been feeling tired lately. College assignments are taking more time than usual, and I haven't been getting enough sleep."

A simple mood tracker might record only "low mood".

Mood Matrix aims to preserve the richer context of the user's reflection and analyze relationships between factors such as:

Sleep
Academic workload
Work
Family
Friends
Daily routine
Personal time
Energy
Focus
Emotional signals
Recurring topics
💡 Proposed Solution

Mood Matrix provides an interactive reflection system where users can record their experiences using natural language.

The platform processes these reflections through an AI/NLP pipeline and organizes the information into meaningful self-reflection insights.

Core workflow
User Reflection
       ↓
Check-in / Journal
       ↓
Backend API
       ↓
AI / NLP Processing
       ↓
Emotion & Signal Analysis
       ↓
Topic / Theme Extraction
       ↓
Historical Data
       ↓
Pattern Engine
       ↓
Personal Baseline
       ↓
Insights & Reflection
       ↓
Dashboard

The system focuses on identifying patterns within the user's own history rather than comparing the user with other people.

🎯 Objectives

Mood Matrix aims to:

Provide a natural-language journaling experience.
Capture richer context than simple mood ratings.
Identify recurring themes from journal entries.
Detect changes across the user's own historical reflections.
Explore relationships between daily-life factors.
Establish a personal baseline.
Generate reflection-oriented insights.
Present information through interactive visualizations.
Give users control over the information they provide.
Create an understandable and user-friendly dashboard.
✨ Key Features
📝 1. Natural-Language Check-in

Users can describe what has been happening in their own words instead of selecting only a predefined mood.

The check-in flow can collect information about:

Current experience
Energy
Overall day
Factors affecting the day
Optional reflection
📔 2. Journal

The Journal section provides a space for users to record their thoughts and experiences.

Journal information can later become an important source for:

NLP analysis
Theme extraction
Pattern detection
Historical comparisons
Reflection generation
🔄 3. What Changed?

The Changes page focuses on identifying changes in the user's recent reflections.

For example:

Recent reflections
        ↓
Historical comparison
        ↓
Identify noticeable shifts
        ↓
Present observations

The purpose is not to label the user but to help them notice changes in their own patterns.

🔁 4. Recurring Themes

The system can identify topics or themes that appear repeatedly across reflections.

Possible themes include:

College
Work
Sleep
Family
Friends
Routine
Personal time
Workload

This allows users to explore what repeatedly appears in their own reflections.

🤝 5. Relationships

The Relationships section explores possible connections between different aspects of the user's daily life.

For example:

Sleep
   ↕
Energy

or

Workload
   ↕
Focus

The system presents these as patterns observed from the user's data rather than definitive causal conclusions.

🧠 6. Personal Baseline

Instead of comparing users against a general population, Mood Matrix can establish a baseline from the user's own historical data.

User's historical reflections
             ↓
       Personal baseline
             ↓
       New reflection
             ↓
     Compare with baseline
             ↓
     Identify changes

This makes the analysis personalized to the individual's history.

📊 7. Dashboard

The dashboard provides a centralized view of the user's reflection data.

It includes areas such as:

Energy
Focus
Sleep
Journal activity
Emotional trends
Patterns
Timeline
Quick insights
Pattern changes
Reflection companion
🔍 8. Insights

The Insights section brings together information from the pattern engine and historical reflections.

The current frontend contains components for:

Weekly summaries
Emerging patterns
Positive patterns
Meaningful insight cards
Pattern stories
Evidence panels
Insight evolution
What changed
Pattern experiments
Reflection feedback
Reflection modal
