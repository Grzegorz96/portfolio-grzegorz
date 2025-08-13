import { Loader } from "@/components/ui/loader";

export default function LoaderDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Loader Components Demo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Default Loader */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Default</h3>
            <Loader />
          </div>

          {/* Spinner Loader */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Spinner</h3>
            <Loader variant="spinner" />
          </div>

          {/* Dots Loader */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Dots</h3>
            <Loader variant="dots" />
          </div>

          {/* Pulse Loader */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Pulse</h3>
            <Loader variant="pulse" />
          </div>

          {/* Fancy Loader */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Fancy</h3>
            <Loader variant="fancy" />
          </div>

          {/* Small Loader */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Small</h3>
            <Loader variant="spinner" size="sm" />
          </div>

          {/* Large Loader */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Large</h3>
            <Loader variant="fancy" size="lg" />
          </div>

          {/* Custom Text */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Custom Text</h3>
            <Loader variant="dots" text="Please wait..." />
          </div>

          {/* No Text */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">No Text</h3>
            <Loader variant="spinner" text="" />
          </div>
        </div>

        {/* Full Screen Loader Demo */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Full Screen Loader</h2>
          <div className="bg-card border rounded-lg p-8">
            <Loader
              variant="fancy"
              size="lg"
              text="Loading your portfolio..."
              className="min-h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
