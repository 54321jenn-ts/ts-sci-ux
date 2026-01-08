import { useNavigate } from 'react-router-dom';
import { Card } from '@tetrascience-npm/tetrascience-react-ui';
import '@tetrascience-npm/tetrascience-react-ui/index.css';

function HomePage() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Data Table',
      description: 'Explore the powerful Table component with sample user data. Features include sortable columns, custom widths, and responsive design.',
      path: '/data-table',
    },
    {
      title: 'Form',
      description: 'Discover form controls including buttons, inputs, checkboxes, toggles, dropdowns, and textareas. All components are fully interactive.',
      path: '/forms',
    },
    {
      title: 'Charts & Graphs',
      description: 'Visualize data with various chart types: line graphs, bar charts, pie charts, scatter plots, and area graphs. All powered by Plotly.',
      path: '/charts',
    },
    {
      title: 'Contributing Guide',
      description: 'Contribute to this project with step-by-step instructions, code examples, and best practices for submitting pull requests.',
      path: '/contributing',
    },
  ];

  return (
    <div className="app-container">
      <h3>Welcome!</h3>
      <p className="page-description">
        Explore design patterns and examples using TetraScience React UI components.
      </p>

      <div className="demo-grid">
        {cards.map((card) => (
          <div
            key={card.path}
            className="clickable-card"
            onClick={() => navigate(card.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate(card.path);
              }
            }}
          >
            <Card>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

