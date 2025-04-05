import AuthNavbar from "../../components/AuthNavbar";
import Footer from "../../components/Footer";
import CaseCard from "../../components/CaseCard";

const ResolvedCases = () => {
  const resolvedCases = [
    // Filtered sample data
    { id: 3, title: "Car Theft on 5th Avenue", status: "Resolved" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-blue-50">
      <AuthNavbar />
      <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Resolved Cases
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resolvedCases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResolvedCases;
