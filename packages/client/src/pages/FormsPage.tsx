import { useState } from 'react';
import {
  Button,
  Input,
  Card,
  Label,
} from '@tetrascience-npm/tetrascience-react-ui';
import '@tetrascience-npm/tetrascience-react-ui/index.css';
import '../components/Stepper.css';

function FormsPage() {

  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    comments: '',
    agreeToTerms: false,
  });

  const steps = [
    { label: 'Personal Info', description: 'Basic information' },
    { label: 'Contact Details', description: 'How to reach you' },
    { label: 'Additional Info', description: 'Optional details' },
    { label: 'Review', description: 'Confirm your information' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert('Form submitted!\n\n' + JSON.stringify(formData, null, 2));
  };

  const updateFormData = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="form-step">
            <div className="form-group">
              <Label>First Name</Label>
              <Input
                value={formData.firstName}
                onChange={(e: any) => updateFormData('firstName', e.target.value)}
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group">
              <Label>Last Name</Label>
              <Input
                value={formData.lastName}
                onChange={(e: any) => updateFormData('lastName', e.target.value)}
                placeholder="Enter your last name"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="form-step">
            <div className="form-group">
              <Label>Email</Label>
              <Input
                value={formData.email}
                onChange={(e: any) => updateFormData('email', e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <Label>Phone</Label>
              <Input
                value={formData.phone}
                onChange={(e: any) => updateFormData('phone', e.target.value)}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <div className="form-group">
              <Label>Address</Label>
              <Input
                value={formData.address}
                onChange={(e: any) => updateFormData('address', e.target.value)}
                placeholder="123 Main St"
              />
            </div>
            <div className="form-group">
              <Label>City</Label>
              <Input
                value={formData.city}
                onChange={(e: any) => updateFormData('city', e.target.value)}
                placeholder="San Francisco"
              />
            </div>
            <div className="form-group">
              <Label>Comments (Optional)</Label>
              <Input
                value={formData.comments}
                onChange={(e: any) => updateFormData('comments', e.target.value)}
                placeholder="Any additional comments..."
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h4 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Review Your Information</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <strong>Name:</strong> {formData.firstName} {formData.lastName}
              </div>
              <div>
                <strong>Email:</strong> {formData.email || 'Not provided'}
              </div>
              <div>
                <strong>Phone:</strong> {formData.phone || 'Not provided'}
              </div>
              <div>
                <strong>Address:</strong> {formData.address || 'Not provided'}
              </div>
              <div>
                <strong>City:</strong> {formData.city || 'Not provided'}
              </div>
              {formData.comments && (
                <div>
                  <strong>Comments:</strong> {formData.comments}
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="demo-grid">
        {/* Multi-Step Form with Stepper */}
        <div style={{ gridColumn: '1 / -1' }}>
          <Card>
            <h3>Multi-Step Form with Stepper</h3>

            {/* Stepper */}
            <div className="stepper">
              {steps.map((step, index) => (
                <div key={index} className="stepper-item">
                  <div className="stepper-step-wrapper">
                    <div
                      className={`stepper-step ${
                        index < currentStep
                          ? 'completed'
                          : index === currentStep
                          ? 'active'
                          : ''
                      }`}
                    >
                      {index < currentStep ? '✓' : index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`stepper-line ${
                          index < currentStep ? 'completed' : ''
                        }`}
                      />
                    )}
                  </div>
                  <div className="stepper-label">
                    <div className="stepper-label-title">{step.label}</div>
                    <div className="stepper-label-description">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Content */}
            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
              <Button
                variant="secondary"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                Back
              </Button>
              {currentStep === steps.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms}
                >
                  Submit
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  Next
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FormsPage;

