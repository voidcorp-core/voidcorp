import { expect, test } from "@playwright/test"

test("home leads to the projects page", async ({ page }) => {
  await page.goto("./")

  await expect(page).toHaveTitle(/Void Corp/)
  await page.getByRole("link", { name: /Voir les projets/ }).click()
  await expect(page).toHaveURL(/\/projets$/)
  for (const name of ["Atlas", "Solaar", "Projet confidentiel", "Nexus", "Root", "NebulaBox"]) {
    await expect(page.getByRole("heading", { level: 2, name })).toBeVisible()
  }
})

test("the projects page has a localized English address", async ({ page }) => {
  await page.goto("./en/projects")

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("What we build.")
  await expect(page.getByText("Under consideration", { exact: true })).toBeVisible()
})
