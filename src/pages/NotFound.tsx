import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => (
  <div className="min-h-screen flex flex-col bg-gray-900 text-white">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/scanberry/"
        className="bg-strawberry text-white px-6 py-3 rounded-full font-semibold hover:bg-strawberry/90 transition-colors"
      >
        Go to Homepage
      </a>
    </main>
    <Footer />
  </div>
);

export default NotFound;
