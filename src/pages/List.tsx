// import Card from "../components/Card";
// import AddEntryModal from "../components/AddEntryModal";
// import { useDiary } from "../contexts/DiaryContext";

// const List = () => {
//   const { dailyEntries, isModalOpen, closeModal, addEntry } = useDiary();

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-pink-50 via-red-700 to-white p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-4xl font-extrabold text-white">Personal Diary</h1>
//         </div>

//         {dailyEntries.length === 0 ? (
//           <p className="text-gray-500 text-lg">
//             Noch keine Einträge vorhanden.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {dailyEntries.map((entry) => (
//               <Card key={entry.slug} entry={entry} />
//             ))}
//           </div>
//         )}
//       </div>

//       <AddEntryModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         onAddEntry={addEntry}
//       />
//     </div>
//   );
// };

// export default List;
