import { NextResponse } from 'next/server';

interface Resource {
  id: number;
  title: string;
  type: 'articles' | 'videos' | 'podcasts';
  description: string;
  link: string;
}

export async function GET() {
  // Simulated delay to show loading state
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        NextResponse.json([
          {
            id: 1,
            title: "Understanding Anxiety",
            type: "articles",
            description: "Learn about the causes and symptoms of anxiety disorders.",
            link: "https://www.example.com/articles/understanding-anxiety"
          },
          {
            id: 2,
            title: "Meditation for Beginners",
            type: "videos",
            description: "A step-by-step guide to start your meditation practice.",
            link: "https://www.example.com/videos/meditation-for-beginners"
          },
          {
            id: 3,
            title: "The Power of Positive Affirmations",
            type: "podcasts",
            description: "Learn how to use positive affirmations to manage stress and improve your well-being.",
            link: "https://www.example.com/podcasts/power-of-positive-affirmations"
          },
          {
            id: 4,
            title: "Coping with Depression",
            type: "articles",
            description: "Strategies and treatments for managing depression effectively.",
            link: "https://www.example.com/articles/coping-with-depression"
          },
          {
            id: 5,
            title: "Yoga for Mental Health",
            type: "videos",
            description: "Yoga routines specifically designed to reduce stress and improve mental health.",
            link: "https://www.example.com/videos/yoga-for-mental-health"
          },
          {
            id: 6,
            title: "Mindfulness Meditation",
            type: "podcasts",
            description: "Guided mindfulness meditation sessions to help you stay present and reduce anxiety.",
            link: "https://www.example.com/podcasts/mindfulness-meditation"
          },
          {
            id: 7,
            title: "Recognizing and Managing Burnout",
            type: "articles",
            description: "Tips to recognize the signs of burnout and how to effectively manage it.",
            link: "https://www.example.com/articles/managing-burnout"
          },
          {
            id: 8,
            title: "Breathing Exercises for Stress Relief",
            type: "videos",
            description: "Simple and effective breathing exercises to help you calm down and manage stress.",
            link: "https://www.example.com/videos/breathing-exercises"
          },
          {
            id: 9,
            title: "The Science of Happiness",
            type: "podcasts",
            description: "Exploring the scientific research behind what makes us happy and how we can increase our happiness.",
            link: "https://www.example.com/podcasts/science-of-happiness"
          },
          {
            id: 10,
            title: "Healthy Sleep Habits",
            type: "articles",
            description: "Learn about the importance of sleep and how to develop healthy sleep habits.",
            link: "https://www.example.com/articles/healthy-sleep-habits"
          },
        ])
      );
    }, 1500);
  });
}
