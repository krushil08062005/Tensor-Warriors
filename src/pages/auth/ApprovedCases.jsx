import AuthNavbar from "../../components/AuthNavbar";
import Footer from "../../components/Footer";
import CaseCard from "../../components/CaseCard";

const ApprovedCases = () => {
  const approvedCases = [
    // Filtered sample data
    { id: 2, title: "Vandalism at Central Park", status: "Approved" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-blue-50">
      <AuthNavbar />
      <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Approved Cases
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedCases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApprovedCases;
