import React, { useContext } from "react";
import { StyleSheet, View, Button, Text, TextInput } from "react-native";
import AuthContext from "../../contexts/auth";

const SignIn: React.FC = () => {
    const { signed, signIn } = useContext(AuthContext);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    async function handleSignIn() {
        if (email.length === 0 || password.length === 0) {
            return setError("Preencha todos os campos");
        }
        await signIn();
        console.log('logar');
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>

            <Text style={styles.error}>{error}</Text>
            
            <Text  style={styles.label}>Email</Text>
            <TextInput onChangeText={setEmail} style={styles.input}></TextInput>
            
            <Text style={styles.label}>Senha</Text>
            <TextInput onChangeText={setPassword} secureTextEntry={true} style={styles.input}></TextInput>
            
            <Text style={styles.btn} onPress={handleSignIn} >Entrar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        width: "80%",
        padding: 10,
    },
    btn: {
        width: "80%",
        textAlign: "center",
        marginTop: 20,
        padding: 10,
        backgroundColor: "#ddd",
    },
    error: {
        fontSize: 10,
        color: "red",
    }

});

export default SignIn;