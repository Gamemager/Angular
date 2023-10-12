export class Usuario {
    constructor(_Id = '', Full_name = '', DOB = '', Usuario = '', Password = '') {

        this._Id = _Id;
        
        this.Full_name = Full_name;
        
        this.DOB= DOB;
        
        this.Usuario = Usuario;
        
        this.Password = Password;
        
        }
        
        _Id: string; 
        
        Full_name: string;
        //correguir 
        DOB: string;
        
        Usuario: string;
        
        Password: string;
}
