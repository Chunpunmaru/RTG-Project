<?php
class patch{

    protected $pdo, $gm,$exp,$lvl,$profile,$add_lvl;
    
    public function __construct(\PDO $pdo)
    {  
        $this ->gm = new GlobalMethods($pdo);
        $this ->pdo = $pdo;
        $this ->profile = new Get($pdo);
        $this ->add_lvl = new addlvl();
    }
    public function select_quest($username,$quest_id){
        $sql = "select * from quests where username='$username' and questID=$quest_id";
        $stmt = $this->pdo->query($sql)->fetchAll()[0];
        // $stmt->execute([$username,$quest_id]);
        return $stmt;

    }
    
    // for adding exp on finished quest
    public function get_exp_quest($username, $questID)
    {
            $sql = "select exp from quests where username='$username' and questID=$questID";
            
            $exp = $this->pdo->query($sql)->fetchColumn();
            return $exp;
    
    }
    public function add_exp_profile($username,$exp){
        $sql = "UPDATE profile set exp=exp+$exp where username='$username' ";

        $stmt = $this->pdo->prepare($sql);
        if($stmt->execute()){
            return $this->gm->response_payload(null,"Success","Done Adding Exp",200);
        }
        else{
            return $this->gm->response_payload(null,"Fail","Fail Adding Exp",403);;
        }
    }
    //getting profile data to use for updating profile
    public function profile($username){
        $data = $this->profile->get_profile($username);

        return $data;
    }

    // updating lvl and exp after finishing quest
    public function update_profile($username, $exp , $lvl){
        $sql = "UPDATE profile set lvl=lvl+$lvl,exp=$exp where username='$username'";
        $stmt = $this->pdo->prepare($sql);
        if($stmt->execute()){
            return $this->gm->response_payload(null,"Success","Updating Profile Exp",200);
        }
        else{
            return $this->gm->response_payload(null,"Fail","Fail updating Profile",403);;
        }
    }
    public function update_title($username, $title){
        $sql = "UPDATE profile set title='$title' where username='$username'";
        $stmt = $this->pdo->prepare($sql);
        if($stmt->execute()){
            return $this->gm->response_payload(null,"Success","Updating Profile Exp",200);
        }
        else{
            return $this->gm->response_payload(null,"Fail","Fail updating Profile",403);;
        }
    }

    //finishing task
    public function finish_task($username,$questID){
        try{
            $quest = $this->select_quest($username, $questID);
            if($quest['status']==1){
                    try{
                        $quest_exp = $this->select_quest($username, $questID);
                        $this->add_exp_profile($username,$quest_exp['exp']);

                        $profile=$this->profile($username);
                        $updated_exp_lvl = $this->add_lvl->add_lvl($profile[0]['lvl'],$profile[0]['exp']);
                        $this->update_profile($username,$updated_exp_lvl[1],$updated_exp_lvl[0]);

                        $new_profile=$this->profile($username);
                        $title = $this->add_lvl->check_title($new_profile[0]['lvl']);
 
                        if(is_string($title)==true){
                            $this->update_title($username, $title);
                                $sql ="UPDATE quests set 
                                status=0
                                where username='$username' AND questID=$questID";
                                $stmt = $this->pdo->prepare($sql);
                            $stmt->execute();
                            return $this->gm->response_payload(null, "Success", "Finished Quest!", 200);
                        }else{
                            
                            $sql ="UPDATE quests set 
                            status=0
                            where username='$username' AND questID=$questID";
                            $stmt = $this->pdo->prepare($sql);
                            $stmt->execute();
                            return $this->gm->response_payload(null, "Success", "Finished Quest!", 200);
                        }

                    }catch(\PDOException $e){
                        return $e;
                    }
            }else if($quest['status']==0){
                return $this->gm->response_payload(null,"Fail","Alreading Finished",406);
            }else if($quest['status']==2){
                return $this->gm->response_payload(null,"Fail","Failed quest",406);
            }else{
                return $this->gm->response_payload(null,"Fail","Error quest",406);
            }
            
        }catch(\PDOException $e){
            return $this->gm->response_payload(null, "failed", "Fail request.", 400);
        }
    }
    public function select_gquest($questID){
        $sql = "select * from quests where questID=$questID";
        $stmt = $this->pdo->query($sql)->fetchAll()[0];
        
        // $stmt->execute([$username,$quest_id]);
        return $stmt;

    }    
    public function finish_guild($username,$questID){
        try{
            $quest = $this->select_gquest($questID);
            if($quest['status']==1){
                    try{
                        $quest_exp = $this->select_gquest($questID);
                        $this->add_exp_profile($username,$quest_exp['exp']);

                        $profile=$this->profile($username);
                        $updated_exp_lvl = $this->add_lvl->add_lvl($profile[0]['lvl'],$profile[0]['exp']);
                        $this->update_profile($username,$updated_exp_lvl[1],$updated_exp_lvl[0]);

                        $new_profile=$this->profile($username);
                        $title = $this->add_lvl->check_title($new_profile[0]['lvl']);
 
                        if(is_string($title)==true){
                            $this->update_title($username, $title);
                                $sql ="UPDATE quests set 
                                status=0
                                where questID=$questID";
                                $stmt = $this->pdo->prepare($sql);
                            $stmt->execute();
                            return $this->gm->response_payload(null, "Success", "Finished Quest!", 200);
                        }else{
                            
                            $sql ="UPDATE quests set 
                            status=0
                            where questID=$questID";
                            $stmt = $this->pdo->prepare($sql);
                            $stmt->execute();
                            return $this->gm->response_payload(null, "Success", "Finished Quest!", 200);
                        }

                    }catch(\PDOException $e){
                        return $e;
                    }
            }else if($quest['status']==0){
                return $this->gm->response_payload(null,"Fail","Alreading Finished",406);
            }else if($quest['status']==2){
                return $this->gm->response_payload(null,"Fail","Failed quest",406);
            }else{
                return $this->gm->response_payload(null,"Fail","Error quest",406);
            }
            
        }catch(\PDOException $e){
            return $this->gm->response_payload(null, "failed", "Fail request.", 400);
        }
    }

    public function fail_task($username,$questID){
        $quest = $this->select_quest($username, $questID);
        if($quest['status']==1){
            try{
                $sql = "UPDATE quests SET status = 2 WHERE username='$username' AND questID=$questID";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute();
                return $this->gm->response_payload(null, "Success", "Finished dropping quest.", 200);
    
            }
            catch(\PDOException $e){
                return $this->gm->response_payload(null, "failed", "Failed to fail quest.", 400);
            }
        }
        else if($quest['status']==2 || $quest['status']==0){
            return $this->gm->response_payload(null, "failed", "Quest already been droped or finished quest.", 406);
        }else{
            return $this->gm->response_payload(null, "Fail", "Error.", 400);
        }
        
    }
}
    
    //   public function edit_username($data, $id){
    //     try{
    //         $sql = "UPDATE accounts SET username = '$data->username' WHERE username = '$id'";
    //         $stmt = $this->pdo->prepare($sql);
    //         $stmt->execute();
    //         return $this->gm->response_payload(null, "Success", "Succesfully edited Username.", 200);
    //     }
    //     catch(\PDOException $e){
    //         return $this->gm->response_payload(null, "Failed", "Failed to update Username.", 400);
    //     }
       
    // }    
    // 0-finished quest
    // 1-ongoing quest
    // 2-failed quest
