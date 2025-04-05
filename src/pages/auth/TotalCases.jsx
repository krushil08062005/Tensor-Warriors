import { Link } from "react-router-dom";
import AuthNavbar from "../../components/AuthNavbar";
import Footer from "../../components/Footer";
import CaseCard from "../../components/CaseCard";

const TotalCases = () => {
  const caseList = [
    // Sample data - replace with actual API calls
    { id: 1, title: "Burglary in Downtown", status: "Under Investigation" },
    { id: 2, title: "Vandalism at Central Park", status: "Reported" },
    { id: 3, title: "Car Theft on 5th Avenue", status: "Resolved" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-blue-50">
      <AuthNavbar />
      <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Total Cases</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseList.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TotalCases;
