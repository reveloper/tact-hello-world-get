import "@stdlib/deploy";

contract HelloWorld with Deployable {
    init() {
        
    }

    get fun greeting(): String {
        return "hello world";
    }
}
