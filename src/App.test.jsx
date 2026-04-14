import { render, screen } from "@testing-library/react"
import App from "./App"

describe("Portfolio App", () => {
  it("renders core sections", () => {
    render(<App />)

    expect(screen.getByRole("heading", { name: /shiva teja nune puttaparthi/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /featured projects/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /certifications & badges/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /get in touch/i })).toBeInTheDocument()
  })

  it("renders profile image with expected source", () => {
    render(<App />)

    const profileImage = screen.getByAltText(/shiva teja nune puttaparthi/i)
    expect(profileImage).toBeInTheDocument()
    expect(profileImage).toHaveAttribute("src", expect.stringContaining("images/mypic.png"))
  })

  it("includes Money Manager project repository link", () => {
    render(<App />)

    const moneyManagerRepo = screen
      .getAllByRole("link", { name: /code/i })
      .find((link) => link.getAttribute("href") === "https://github.com/shivateja1602/Money_manager")

    expect(moneyManagerRepo).toBeInTheDocument()
    expect(moneyManagerRepo).toHaveAttribute("href", "https://github.com/shivateja1602/Money_manager")
  })

  it("provides contact CTA mailto link", () => {
    render(<App />)

    const contactCta = screen.getByRole("link", { name: /send me a message/i })
    expect(contactCta).toBeInTheDocument()
    expect(contactCta).toHaveAttribute("href", "mailto:shivateja1602@gmail.com")
  })
})
