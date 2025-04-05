export default function Footer() {
  return (
    <footer className="bg-white py-6 text-center mt-auto">
      <p className="text-gray-700">
        &copy; {new Date().getFullYear()} CrimeWatch. All rights reserved.
      </p>
    </footer>
  );
}
