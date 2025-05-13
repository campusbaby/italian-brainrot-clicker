import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <section className="py-20 flex-grow flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="animate-fadeIn">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-text-muted max-w-md mx-auto mb-8">
              You seem to be lost in the brainrot depths of the internet. This page doesn't exist, or it might have consumed too many brainrot points.
            </p>
            
            <Link href="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>
          
          <div className="mt-16">
            <p className="text-text-muted">You've collected <span className="text-primary font-bold">404</span> brainrot points</p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 