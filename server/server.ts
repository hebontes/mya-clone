export async function getAllManufacturers() {
  const res = await fetch("https://static.my.ge/myauto/js/mans.json")
  const response = await res.json()

  // simulate 10 seconds sleep
  // await new Promise((resolve) => setTimeout(resolve, 10000))

  if (!res.ok) throw new Error("Failed to fetch products")

  return response
}

export async function getModelByMan(man_id: string | number) {
  const res = await fetch(
    `https://api2.myauto.ge/ka/getManModels?man_id=${man_id}`
  )
  const response = await res.json()

  if (!res.ok) throw new Error("Failed to fetch products")

  return response.data
}

export async function getProducts(params = "") {
  const res = await fetch("https://api2.myauto.ge/ka/products/", {
    cache: "no-store",
  })
  const response = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return response.data
}

export async function getCats() {
  const res = await fetch("https://api2.myauto.ge/ka/cats/get")
  const response = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return response.data
}
