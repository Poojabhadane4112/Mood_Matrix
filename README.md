# 🌿 Mood Matrix

### Personal Reflection & Pattern-Awareness Platform

Mood Matrix is a web-based self-reflection platform that helps users record their daily experiences, identify recurring themes, notice changes over time, and explore patterns within their own historical reflections.

> Mood Matrix focuses on self-awareness and reflection. It does not provide medical diagnosis or replace professional support.

---

## 📌 Problem Statement

Traditional mood-tracking applications often depend on simple mood ratings, emojis, or fixed scales. These methods may not capture the context behind a person's experiences or reveal recurring patterns across multiple entries.

Users may find it difficult to recognize how factors such as:

- Sleep
- College / Work
- Relationships
- Routine
- Personal time
- Energy
- Focus

appear across their reflections over time.

---

## 💡 Proposed Solution

Mood Matrix allows users to express their experiences through natural-language check-ins and journal entries.

The system is designed to process these reflections using NLP and analyze:

- Emotional signals
- Recurring topics and themes
- Changes over time
- Relationships between different factors
- Personal historical patterns

The results are presented through dashboards, visualizations, insights, and reflection-oriented interfaces.

## Key Features

 Natural-Language Check-in – Describe experiences in your own words.
 Journal – Record personal reflections and experiences.
 What Changed? – Explore noticeable changes in recent reflections.
 Recurring Themes – Identify topics appearing repeatedly.
 Relationships – Explore connections between different aspects of daily life.
 Dashboard – View trends, activity, patterns, and summaries.
 Personal Baseline – Compare new observations with the user's own history.
 Insights – Present reflection-oriented observations from collected data.

## Project Structure

Mood_Matrix/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   ├── checkin/
│   │   │   ├── journal/
│   │   │   ├── changes/
│   │   │   ├── themes/
│   │   │   ├── relationships/
│   │   │   ├── insights/
│   │   │   ├── layout/
│   │   │   └── common/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md

## Technologies used

| Technology         | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| **React.js**       | Frontend UI development                         |
| **Vite**           | Development and build tool                      |
| **JavaScript**     | Application logic                               |
| **React Router**   | Page navigation                                 |
| **CSS**            | Styling and responsive UI                       |
| **Lucide React**   | UI icons                                        |
| **Recharts**       | Data visualization                              |
| **Hugging Face**   | AI/NLP processing                               |
| **Backend API**    | Communication between application layers        |
| **Pattern Engine** | Personal pattern and baseline analysis          |
| **Database**       | Storage of user reflections and historical data |
