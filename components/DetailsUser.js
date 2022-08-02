export default function DetailsUser({key, name,workCard,sector, cpf, phone}) {
  return (
    <div key={key} className="flex flex-col p-5 mb-2 text-white bg-gray-800 hover:bg-slate-700">
      <h2 className="text-cyan-600">Nome do Funcionário:</h2>
      <span>{name}</span>
      <p className="text-cyan-600">CPF</p>
      <span>{cpf}</span>
      <p className="text-cyan-600">Setor:</p>
      <span>{sector}</span>
      <p className="text-cyan-600">PIS/PASEP:</p>
      <span>{workCard}</span>
      <p className="text-cyan-600">Contato:</p>
      <span>{phone}</span>
    </div>
  )
}
