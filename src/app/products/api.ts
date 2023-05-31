export async function getProducts() {
  return fetch('https://api.github.com/users/namevug').then(res => 
    res.json()
  )
}