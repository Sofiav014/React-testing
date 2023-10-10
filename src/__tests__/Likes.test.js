import { render, screen, fireEvent } from "@testing-library/react"
import Likes from "../components/Likes"

test("Por defecto, el componente muestra en el párrafo el valor 'Likes: 0'", () => {
    render(<Likes />);
    const likesText = screen.getByText("Likes: 0");
    expect(likesText).toBeInTheDocument();
});

test("Cuando se hace clic en el botón Like, el número de likes se incremente en uno", () => {
    render(<Likes />);
    const likeButton = screen.getByText("Like");
    const likesText = screen.getByText("Likes: 0");
  
    fireEvent.click(likeButton);
  
    expect(likesText).toHaveTextContent("Likes: 1");
});

test("Cuando se hace clic en el botón Dislike el número de likes se decrementa en uno", () => {
    render(<Likes />);
    const dislikeButton = screen.getByText("Dislike");
    const likesText = screen.getByText("Likes: 0");
  
    fireEvent.click(dislikeButton);
  
    expect(likesText).toHaveTextContent("Likes: -1");
});