import React, { Suspense, lazy } from "react"
const LazyComponent = lazy(() => import('./lazy.js'))

let data = ''
let p = ''
function FetchData() {
  if(data) return data
  if(p) throw p
  p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000);
  })
  throw p.then(() => {data = 'aaa'})
}

// function requireData() {
//   if(p) throw p
//   p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data = 'get data'
//       resolve()
//     }, 1000);
//   })
//   throw p
// }

// function SuspenseComp() {
//   const content = requireData();
//   return <p>Save {content}</p>
// }

export default function Suspense1Demo() {
  return (
    <>
    <Suspense fallback={<div>Loading</div>}>
      <FetchData />
      {/* <SuspenseComp /> */}
      <LazyComponent />
    </Suspense>
    </>
  )
}