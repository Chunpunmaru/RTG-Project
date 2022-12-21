<?php

class Auth{

    protected $pdo, $gm, $profile;

    public function __construct(\PDO $pdo)
    {
        $this->gm = new GlobalMethods($pdo);
        $this ->profile = new Get($pdo);
        $this->pdo = $pdo;
    }

    
    
    public function checkPassword($password, $existingPassword){
       return $existingPassword === crypt($password, $existingPassword);
    }


    public function user_exist($data){

        $sql= "SELECT * FROM accounts where username=? ";
        $result = $this->pdo->prepare($sql);
        $result->execute([$data]);

        if($result->rowCount()>0){
            return false;
        }
        else{
            return true;
        }

    }

    public function add_account_profile($username){
        $sql = "insert into profile (`username`, `exp`, `lvl`, `title`, `daily_done`, `weekly_done`, `main_done`, `guild_done`, `guild`)
        VALUES (?,'0','1','Noob','0','0','0','0','')";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$username]);
        echo "done add_account_profile";
    }

    private function generateSalt($saltLength){
        $str = md5(uniqid(mt_rand(), true));
        $b64string = base64_encode($str);
        $mb64string = str_replace("+", ".", $b64string);
        return substr($mb64string, 0, $saltLength);
    }



    public function encrypt_password($pword){
        $hashFormat = "$2y$10$";
        $saltLength = 22;
        $salt = $this->generateSalt($saltLength);
        return crypt($pword, $hashFormat.$salt);
    }
    

    public function add_account($data)
    { 


        $sql = "INSERT INTO accounts(username,password) 
        VALUES (?,?)";

        
        // $exist = $this->user_exist($data->username);
        if ($this->user_exist($data->username)) {
            if(strlen($data->password) >= 6 && $data->password == $data->conpass) {
                try{
                    $stmt = $this->pdo->prepare($sql);
                    $enc_password = $this->encrypt_password($data->password);
                    $this->add_account_profile($data->username);
                    $stmt->execute([$data->username, $enc_password]);
                    return $this->gm->response_payload($data, "Success", "Succesfully created account.", 200);
                } catch (PDOException $e) {
                    return $this->gm->response_payload(null, "Failed", $e->getMessage(), 400);
                }
            }else{

                return http_response_code(404);
            }
        }
        else{

            return http_response_code(400);

        }
        
    }
    

    //Login Function
     public function login($data)
     {
        $username = $data->username;
        $password = $data->password;
        $sql = "SELECT * from accounts where username = ? limit 1 ";
        // $stmt = $this->pdo->query($sql)->fetch();
        $stmt = $this->pdo->prepare($sql);
        try{
            $stmt->execute([$username]);
            if($stmt->rowCount()>0){
                $res = $stmt->fetchAll()[0];
                
                if($this->checkPassword($password,$res['password'])){
                    return $this->profile->get_profile($username);
                           
                }
                else{
                    return http_response_code(406);
                }
            
            }else{
                return http_response_code(428);
            }
        }catch(\PDOException $e){
            return $e;
        }

    
        
     }
 }