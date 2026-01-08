import { useNavigate } from 'react-router-dom';
import { Card, Badge } from '@tetrascience-npm/tetrascience-react-ui';
import '@tetrascience-npm/tetrascience-react-ui/index.css';

function HomePage() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Data Table',
      description: 'Explore the powerful Table component with sample user data. Features include sortable columns, custom widths, and responsive design.',
      badge: { variant: 'success' as const, label: 'Interactive' },
      path: '/data-table',
    },
    {
      title: 'Form',
      description: 'Discover form controls including buttons, inputs, checkboxes, toggles, dropdowns, and textareas. All components are fully interactive.',
      badge: { variant: 'info' as const, label: 'Interactive' },
      path: '/forms',
    },
    {
      title: 'Charts & Graphs',
      description: 'Visualize data with various chart types: line graphs, bar charts, pie charts, scatter plots, and area graphs. All powered by Plotly.',
      badge: { variant: 'success' as const, label: 'Visualization' },
      path: '/charts',
    },
  ];

  return (
    <div className="app-container">
      <p className="page-description">
        Welcome! This is a quick demo of TetraScience React UI components.
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
              <Badge variant={card.badge.variant}>{card.badge.label}</Badge>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

