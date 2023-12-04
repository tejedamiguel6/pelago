export async function getData() {
  const response = await fetch('http://localhost:4000/faqs')
  return response.json()
}

// export default function FetchData() {
//   const data = getData()

//   console.log(data, 'data')

//   return <div>FetchData</div>
// }
