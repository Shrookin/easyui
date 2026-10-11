import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Breadcrumb } from './breadcrumb';
import { Badge } from './badge';
import { Alert, AlertTitle, AlertDescription } from './alert';
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonReveal } from './skeleton';
import { Stepper, StepPanels } from './stepper';

describe('Batch 2: Breadcrumb component', () => {
  it('renders all breadcrumb items when length is within maxItems', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: 'Breadcrumb' },
    ];
    render(<Breadcrumb items={items} maxItems={4} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();
    expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
  });

  it('collapses middle items when exceeding maxItems and expands on ellipsis click', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/library' },
      { label: 'UI', href: '/ui' },
      { label: 'Navigation', href: '/nav' },
      { label: 'Breadcrumb' },
    ];
    render(<Breadcrumb items={items} maxItems={3} />);

    // Middle items collapsed
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Library')).not.toBeInTheDocument();
    const moreBtn = screen.getByRole('button', { name: /show hidden pages/i });
    expect(moreBtn).toBeInTheDocument();

    // Expand
    fireEvent.click(moreBtn);
    expect(screen.getByText('Library')).toBeInTheDocument();
    expect(screen.getByText('UI')).toBeInTheDocument();
  });
});

describe('Batch 2: Badge component', () => {
  it('renders text, dot, pulse and triggers onRemove callback', () => {
    const handleRemove = vi.fn();
    render(
      <Badge variant="soft" tone="success" dot pulse onRemove={handleRemove}>
        Verified
      </Badge>
    );

    expect(screen.getByText('Verified')).toBeInTheDocument();
    const removeBtn = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeBtn);
    expect(handleRemove).toHaveBeenCalledTimes(1);
  });

  it('renders numeric and rolling badge', () => {
    const { rerender } = render(<Badge variant="solid" tone="danger">{5}</Badge>);
    expect(screen.getByText('5')).toBeInTheDocument();

    rerender(<Badge variant="solid" tone="danger">{10}</Badge>);
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});

describe('Batch 2: Alert component', () => {
  it('renders alert title, description, and handles dismiss animation trigger', () => {
    const handleDismiss = vi.fn();
    render(
      <Alert tone="danger" dismissible onDismiss={handleDismiss}>
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>Your card was declined.</AlertDescription>
      </Alert>
    );

    expect(screen.getByText('Payment failed')).toBeInTheDocument();
    expect(screen.getByText('Your card was declined.')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: /dismiss/i });
    fireEvent.click(closeBtn);
  });

  it('renders with action button slot', () => {
    render(
      <Alert
        tone="info"
        action={<button type="button">Update now</button>}
      >
        <AlertTitle>New update</AlertTitle>
      </Alert>
    );

    expect(screen.getByText('New update')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /update now/i })).toBeInTheDocument();
  });
});

describe('Batch 2: Skeleton component', () => {
  it('renders basic skeleton and presets', () => {
    render(
      <div>
        <Skeleton data-testid="skel-box" className="h-6 w-24" />
        <SkeletonAvatar size={32} />
        <SkeletonText lines={2} />
      </div>
    );

    expect(screen.getByTestId('skel-box')).toBeInTheDocument();
  });

  it('renders live content when loading is false in SkeletonReveal', () => {
    render(
      <SkeletonReveal loading={false} skeleton={<div data-testid="loading-state">Loading...</div>}>
        <div data-testid="live-content">Actual User Data</div>
      </SkeletonReveal>
    );

    expect(screen.getByTestId('live-content')).toBeInTheDocument();
    expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
  });

  it('renders skeleton placeholder when loading is true in SkeletonReveal', () => {
    render(
      <SkeletonReveal loading={true} skeleton={<div data-testid="loading-state">Loading...</div>}>
        <div data-testid="live-content">Actual User Data</div>
      </SkeletonReveal>
    );

    expect(screen.getByTestId('loading-state')).toBeInTheDocument();
    expect(screen.queryByTestId('live-content')).not.toBeInTheDocument();
  });
});

describe('Batch 2: Stepper component', () => {
  const steps = [
    { title: 'Account', description: 'Personal details' },
    { title: 'Workspace', description: 'Name project' },
    { title: 'Finish' },
  ];

  it('renders progress stepper and calls onStepChange when clicking completed steps', () => {
    const handleChange = vi.fn();
    render(<Stepper steps={steps} current={1} onStepChange={handleChange} />);

    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Workspace')).toBeInTheDocument();
    expect(screen.getByText('Finish')).toBeInTheDocument();

    // Step 0 is complete, clicking it triggers onStepChange(0)
    const completedStepBtn = screen.getByRole('button', { name: /account/i });
    fireEvent.click(completedStepBtn);
    expect(handleChange).toHaveBeenCalledWith(0);
  });

  it('renders StepPanels matching active index', () => {
    render(
      <StepPanels current={1}>
        <div>Panel One</div>
        <div>Panel Two</div>
      </StepPanels>
    );

    expect(screen.getByText('Panel Two')).toBeInTheDocument();
    expect(screen.queryByText('Panel One')).not.toBeInTheDocument();
  });
});
