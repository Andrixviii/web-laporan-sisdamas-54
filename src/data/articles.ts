import { Article } from '../types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to advanced framework capabilities.',
    content: `
      <p>Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging constantly. As we look toward 2025, several key trends are set to reshape how we build and interact with web applications.</p>
      
      <h3>AI-Powered Development Tools</h3>
      <p>Artificial intelligence is revolutionizing the development process, from code generation to automated testing. Tools like GitHub Copilot and ChatGPT are becoming integral parts of developers' workflows.</p>
      
      <h3>Server Components and Edge Computing</h3>
      <p>React Server Components and edge computing are changing how we think about rendering and data fetching, offering better performance and user experiences.</p>
      
      <h3>WebAssembly Adoption</h3>
      <p>WebAssembly is enabling high-performance applications in the browser, opening up new possibilities for complex web applications.</p>
    `,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Senior Frontend Developer with 8+ years of experience in React and modern web technologies.'
    },
    category: 'Siklus 1',
    tags: ['Web Development', 'React', 'AI', 'Trends'],
    publishedAt: '2024-12-15',
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false
  },
  {
    id: '2',
    title: 'Building Scalable React Applications: Best Practices',
    excerpt: 'Learn essential patterns and practices for building maintainable and scalable React applications that can grow with your team.',
    content: `
      <p>Building scalable React applications requires careful planning and adherence to best practices. Here are the key strategies that successful teams use.</p>
      
      <h3>Component Architecture</h3>
      <p>Proper component organization and separation of concerns is crucial for maintainability. Use container and presentational component patterns.</p>
      
      <h3>State Management</h3>
      <p>Choose the right state management solution based on your application's complexity. Context API for simple cases, Redux or Zustand for complex state.</p>
      
      <h3>Performance Optimization</h3>
      <p>Implement React.memo, useMemo, and useCallback strategically to prevent unnecessary re-renders and improve performance.</p>
    `,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Full-stack developer and tech lead specializing in React ecosystem and scalable architectures.'
    },
    category: 'Siklus 4',
    tags: ['React', 'Architecture', 'Best Practices', 'Scalability'],
    publishedAt: '2024-12-12',
    imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false
  },
  {
    id: '3',
    title: 'The Rise of TypeScript: Why Every Developer Should Learn It',
    excerpt: 'Discover why TypeScript has become the go-to language for modern JavaScript development and how it can improve your code quality.',
    content: `
      <p>TypeScript has transformed from a Microsoft experiment to the standard for large-scale JavaScript applications. Here's why it matters.</p>
      
      <h3>Type Safety Benefits</h3>
      <p>Static type checking catches errors at compile time, reducing runtime bugs and improving code reliability.</p>
      
      <h3>Developer Experience</h3>
      <p>Better IDE support, autocomplete, and refactoring tools make development more efficient and enjoyable.</p>
      
      <h3>Team Collaboration</h3>
      <p>Clear type definitions serve as documentation and make code more readable for team members.</p>
    `,
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Software engineer passionate about type-safe development and developer tooling.'
    },
    category: 'Siklus 3',
    tags: ['TypeScript', 'JavaScript', 'Development', 'Best Practices'],
    publishedAt: '2024-12-10',
    imageUrl: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox: When to Use Each Layout Method',
    excerpt: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each layout method.',
    content: `
      <p>CSS Grid and Flexbox are both powerful layout systems, but they excel in different scenarios. Understanding when to use each is crucial for effective web design.</p>
      
      <h3>Flexbox: One-Dimensional Layouts</h3>
      <p>Flexbox is perfect for arranging items in a single direction, whether row or column. It's ideal for navigation bars, card layouts, and centering content.</p>
      
      <h3>CSS Grid: Two-Dimensional Layouts</h3>
      <p>Grid excels at creating complex, two-dimensional layouts. Use it for page layouts, image galleries, and any design requiring precise control over both rows and columns.</p>
      
      <h3>Combining Both</h3>
      <p>The most powerful approach is often combining both: Grid for the overall page structure and Flexbox for component-level layouts.</p>
    `,
    author: {
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'UI/UX Developer with expertise in modern CSS techniques and responsive design.'
    },
    category: 'Siklus 2',
    tags: ['CSS', 'Layout', 'Flexbox', 'Grid', 'Web Design'],
    publishedAt: '2024-12-08',
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false
  },
  {
    id: '5',
    title: 'Modern JavaScript: Features Every Developer Should Know',
    excerpt: 'Stay up-to-date with the latest JavaScript features that can make your code more elegant and efficient.',
    content: `
      <p>JavaScript continues to evolve with new features that improve developer productivity and code quality. Here are the essential modern features you should master.</p>
      
      <h3>Optional Chaining and Nullish Coalescing</h3>
      <p>These operators make working with nested objects and handling null/undefined values much safer and cleaner.</p>
      
      <h3>Async/Await and Promise.allSettled</h3>
      <p>Modern asynchronous patterns that make complex async operations more readable and manageable.</p>
      
      <h3>Destructuring and Spread Operator</h3>
      <p>Powerful patterns for working with objects and arrays that reduce code verbosity and improve readability.</p>
    `,
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'JavaScript enthusiast and technical writer focused on modern web development practices.'
    },
    category: 'Siklus 4',
    tags: ['JavaScript', 'ES6+', 'Modern Features', 'Best Practices'],
    publishedAt: '2024-12-05',
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false
  }
];

export const categories = [
  { id: '1', name: 'Siklus 1', count: 7 },
  { id: '2', name: 'Siklus 2', count: 7 },
  { id: '3', name: 'Siklus 3', count: 7 },
  { id: '4', name: 'Siklus 4', count: 7 }
];