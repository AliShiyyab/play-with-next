'use client'

const Filtration = ({setFilterDate}: { setFilterDate: (args: any) => void }) => {
  
  const handleChange = (e: any) => {
    setFilterDate(e.target.value)
  }
  
  return (
      <div></div>
  );
}

export default Filtration;
