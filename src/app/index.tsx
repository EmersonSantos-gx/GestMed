import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Captura as dimensões da tela do celular para criar os arcos proporcionais
const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Elipses Decorativas de Fundo */}
      <View style={styles.elipseTopLeft} />
      <View style={styles.elipseBottomRight} />

      {/* Container Principal Centralizado */}
      <View style={styles.content}>
        
        {/* Considerando que a imagem GestMed.png contenha o "GM+", "GestMed" e "Gestão de Plantão Médico" */}
        <Image 
          source={require('./assets/GestMed.png')} 
          style={styles.logo}
        />
        
        <Text style={styles.subtitle}>
          Organize plantões. Conecte profissionais
        </Text>

        {/* Botão ENTRAR */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        {/* Link Criar Conta */}
        <TouchableOpacity>
          <Text style={styles.linkText}>Criar conta</Text>
        </TouchableOpacity>

      </View>

      {/* Rodapé fixado na parte inferior da tela */}
      <Text style={styles.footerText}>
        Gestão médica com simplicidade
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A3D2F", // Background: Floresta
    alignItems: "center",
    justifyContent: "center", // Centraliza o bloco principal verticalmente
  },
  
  /* --- DESENHO DAS ELIPSES --- */
  elipseTopLeft: {
    position: "absolute",
    top: -width * 0.6,   // Empurra para fora da tela
    left: -width * 0.61,  // Empurra para fora da tela
    width: width * 1.2,  // Tamanho maior que a tela
    height: width * 1.2, 
    borderRadius: width, // Transforma em um círculo perfeito
    borderWidth: 65,     // A espessura do arco da imagem
    borderColor: "#4A9B6F", // Elipse: Salvia
  },
  elipseBottomRight: {
    position: "absolute",
    bottom: -width * 0.6, 
    right: -width * 0.61,  
    width: width * 1.2,   
    height: width * 1.2,
    borderRadius: width,
    borderWidth: 65,     
    borderColor: "#4A9B6F", // Elipse: Salvia
  },
  
  /* --- CONTEÚDO CENTRAL --- */
  content: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 32,
    zIndex: 1, // O zIndex garante que os botões fiquem clicáveis, acima das elipses de fundo
  },
  logo: {
    width: 280,
    height: 180, 
    resizeMode: "contain",
    marginBottom: 16,
  },
  subtitle: {
    color: "#F5F0E8", // Container e Texto: Creme
    fontSize: 14,
    marginBottom: 40, // Espaçamento grande até o botão Entrar
    textAlign: "center",
  },
  
  /* --- BOTÕES --- */
  button: {
    backgroundColor: "#B8935A", // Botões: Ouro Seco
    width: "80%", // O botão não ocupa a tela toda, fica mais contido
    paddingVertical: 16,
    borderRadius: 30, // Deixa as bordas totalmente arredondadas, igual ao protótipo
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: "#F5F0E8", // Creme
    fontWeight: "bold",
    fontSize: 16,
  },
  linkText: {
    color: "#F5F0E8", // Creme
    fontSize: 16,
  },
  
  /* --- RODAPÉ --- */
  footerText: {
    position: "absolute",
    bottom: 40, // Fixa o texto 40px acima da base da tela do celular
    color: "#F5F0E8", // Creme
    fontSize: 14,
    textAlign: "center",
    fontWeight: "300", 
  }
});