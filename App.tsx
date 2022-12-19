import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </>
  );
}

// LogBox: É uma caixa que mostra os erros da aplicação. Poder ser amarela e vermelha (Amarelo: É como um "warning", é um erro mais simples, que não quebra a aplicação)
// Já o a caixa vermelha representa um erro grave, que quebra a aplicação

// Não colocamos as unidades de medida: Densidade de Pixel

// Existem dois tipos de pixel: O pixel de Hardware: O ponto físico na tela
// Pixel de software: Pontos dinâmicos na tela, variam de acordo com a densidade de pixel
// Maior densidade: Mais qualidade
