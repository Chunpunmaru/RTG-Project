<?php

class addGuild{

    protected $pdo, $gm;
    public function __construct(\PDO $pdo)
    {
        $this ->gm = new GlobalMethods($pdo);
        $this ->pdo = $pdo;
    }
    

    public function guild_exist($data){

        $sql= "SELECT * FROM guild where guild_name='$data'";
        $result = $this->pdo->query($sql);
        $row = $result->fetchColumn();
        $exists = null;
        if($row>0){
            return $exists=true;
        }
        else{
            return $exists=false;
        }


    }
    
    public function guild_memberexist($data){

        $sql= "SELECT * FROM guild where members='$data'";
        $result = $this->pdo->query($sql);  
        $row = $result->fetchColumn();
        $exists = null;
        if($row>0){
            return $exists=true;
        }
        else{
            return $exists=false;
        }


    }




    public function generateCode(){
        $keyLength = 8;
        $str = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ()/$";
        $randStr = substr(str_shuffle($str), 0, $keyLength);
        return $randStr;
    }

    public function add_GuildStatus($username,$guild_name){

            $sql = "Update profile set guild='$guild_name' where username='$username' ";
            $stmt = $this->pdo->prepare($sql)->execute();
            if($stmt){
                return http_response_code(200);
            }else{
                return http_response_code(407);
            }

        
    }

    public function add_guild_members($username,$guild_name,$guild_inv){
        $sql = "insert into guild (`guild_name`, `members`, `position`, `inv_code`) values (?,?,?,?)";
        $stmt = $this->pdo->prepare($sql)->execute([$guild_name, $username, "Member", $guild_inv]);
            if($stmt){
                return http_response_code(200);
            }else{
                return http_response_code(407);
            }
    }




    public function join_guild($username, $data)
    {
        $guildname = $data->guild_name;
        $inv = $data->inv_code;
        $sql = "SELECT * from guild where guild_name = ? limit 1 ";
        $stmt = $this->pdo->prepare($sql);
        $exist = $this->guild_memberexist($username);
        if ($exist == false) {
            try {
                $stmt->execute([$guildname]);
                if ($stmt->rowCount() > 0) {
                    $res = $stmt->fetchAll()[0];

                    if ($inv == $res['inv_code']) {
                        try {
                            $this->add_GuildStatus($username, $data->guild_name);
                            $this->add_guild_members($username, $data->guild_name, $inv);
                            return "Success,You have joined the guild";
                        } catch (\PDOException $e) {
                            return $e;
                        }

                    } else {
                        return http_response_code(404);;
                    }

                } else {
                    return http_response_code(403);
                }
            } catch (\PDOException $e) {
                return http_response_code(404);
            }
        } else {
            return http_response_code(404);
        }
    }
        
//hardcoded member status
//update profile to guild



    public function add_guild($username,$data){
        $sql = "INSERT INTO guild (guild_name, members, position,inv_code) 
        VALUES (?,?,?,?)";
        
        $exist = $this->guild_exist($data->guild_name);

        if ($exist == false) {

            try {
                $stmt = $this->pdo->prepare($sql);
                $guild_name = $data->guild_name;
                $this->add_GuildStatus($username, $data->guild_name);
                $inv = $guild_name."_".$this->generateCode();  
                $stmt->execute([$data->guild_name, $username, "Master", $inv]);
                return $this->gm->response_payload($data, "Success", "Succesfully created Guild.", 200);
            } catch (\PDOException $e) {
                return $this->gm->response_payload(null, "Failed", "Failed to create guild.", 400);
            }
        }
        else{   
            return http_response_code(404);
        }
        
        
    }
    public function leave_guild($username){
        try{
            $this->add_GuildStatus($username, null);
            $sql = "delete from guild where members = '$username'";
            $prep = $this->pdo->prepare($sql)->execute();

            return $prep;
        }catch(\PDOException $e){
            return $e;
        }
        
    }
}