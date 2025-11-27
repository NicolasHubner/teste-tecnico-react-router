import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InfoCard from "../components/ui/infoCard"

describe("InfoCard Component Tests", () => {
  const mockTitle = "Título de Teste";
  const mockChildrenText = "Conteúdo interno do InfoCard";

  it("should render the title correctly", () => {
    render(
      <InfoCard title={mockTitle}>
        <p>{mockChildrenText}</p>
      </InfoCard>
    );

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it("should render children content", () => {
    render(
      <InfoCard title={mockTitle}>
        <p>{mockChildrenText}</p>
      </InfoCard>
    );

    expect(screen.getByText(mockChildrenText)).toBeInTheDocument();
  });
});
