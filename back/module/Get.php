<?php

class Get{

    protected $pdo, $gm;

    public function __construct(\PDO $pdo)
    {
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;
    }


    public function get_daily($username = null){
        $sql = "SELECT * FROM quests";
        if($username!=null){
            $sql .= " WHERE username = '$username' AND category='daily' AND status ='1'";
        }
        $result = $this->gm->exec_query($sql);
        if($result['code']==200){
            return $this->gm->response_payload($result['data'], "success", "Succesfully retrieved data.", $result['code']);
        }
        return $this->gm->response_payload(null, "failed", "Unable tp retrieve data.", 200);
    }


    public function get_weekly($username = null){
        $sql = "SELECT * FROM quests";
        if($username!=null){
            $sql .= " WHERE username = '$username' AND category='Weekly' AND status ='1' ";
        }
        $result = $this->gm->exec_query($sql);
        if($result['code']==200){
            return $this->gm->response_payload($result['data'], "success", "Succesfully retrieved data.", $result['code']);
        }
        return $this->gm->response_payload(null, "failed", "Unable tp retrieve data.", 200);
    }



    public function get_guild_quest($guildname){
        $sql = "SELECT * FROM quests";
        if($guildname != null){
            $sql .= " where category='Guild-$guildname' AND status='1' ";
        }
        $result = $this->gm->exec_query($sql);
        if($result['code']==200){
            return $this->gm->response_payload($result['data'], "success", "Succesfully retrieved data.", $result['code']);
        }
        return $this->gm->response_payload(null, "failed", "Unable tp retrieve data.", 200);
    }



    public function get_main($username = null){
        $sql = "SELECT * FROM quests  ";
        if($username!=null){
            $sql .= " WHERE username = '$username' AND category='main' AND status=1";
        }
        $result = $this->gm->exec_query($sql);
        if($result['code']==200){
            return $this->gm->response_payload($result['data'], "success", "Succesfully retrieved data.", $result['code']);
        }
        return $this->gm->response_payload(null, "failed", "Unable tp retrieve data.", 200);
    }


    
    public function get_guild_members($username = null){
        $sql = "SELECT profile.username, profile.guild, guild.position  FROM profile";
        if($username!=null){
            $sql .= " RIGHT JOIN guild ON profile.$username = guild.members AND profile.guild= guild.guild_name";
        }
        $result = $this->gm->exec_query($sql);
        if($result['code']==200){
            return $this->gm->response_payload($result['data'], "success", "Succesfully retrieved data.", $result['code']);
        }
        return $this->gm->response_payload(null, "failed", "Unable tp retrieve data.", $result['code']);
    }

    public function get_profile($username){
        $sql = "SELECT * from profile where username='$username'";
        // $data = $this->pdo->query($sql)->fetchAll()[0];
        // $data = $this->pdo->query($sql)->fetchAll()[0];
        $data = $this->gm->exec_query($sql);
        if($data['code']==200){
            $response = array($this->gm->response_payload($data['data'], "success", "Succesfully retrieved data.", $data['code']));
            return $response[0]['payload'];
                }else{
            return $this->gm->response_payload(null, "failed", "Unable tp retrieve data.", $data['code']);
        }
            // return $data;


    }
    
    public function get_questDone($username = null){
       
        $sql = "SELECT COUNT(questID) FROM quests";
        if($username!=null){
            $sql .= " WHERE username = '$username' AND status='0'";
        }
        $result = $this->pdo->query($sql)->fetchColumn();
        return $result;
    
        
    }


    public function get_MainquestDone($username = null){
        $sql = "SELECT COUNT(questID) FROM quests";
        if($username!=null){
            $sql .= " WHERE username = '$username' AND category='Main' AND status='0'";
        }
        $result = $this->pdo->query($sql)->fetchColumn();
        return $result;

    }


    public function get_GuildquestDone($username = null){
        $sql = "SELECT COUNT(questID) FROM quests";
        if($username!=null){
            $sql .= " WHERE username = '$username' AND category LIKE 'Guild-%' AND status='0'";
        }
        $result = $this->pdo->query($sql)->fetchColumn();
        return $result;
    }

    public function get_WeeklyquestDone($username = null){
        $sql = "SELECT COUNT(questID) FROM quests";
        if($username!=null){
            $sql .= " WHERE username = '$username' AND category='Weekly' AND status='0'";
        }
        $result = $this->pdo->query($sql)->fetchColumn();
        return $result;
    }
    public function get_DailyquestDone($username = null){
        $sql = "SELECT COUNT(questID) FROM quests";
        if($username!=null){
            $sql .= " WHERE username = '$username' AND category='Daily' AND status='0'";
        }
        $result = $this->pdo->query($sql)->fetchColumn();
        return $result;
    }

    
    public function get_questFailed($username = null){
        $sql = "SELECT COUNT(questID) FROM quests";
        if($username!=null){
            $sql .= " WHERE username = '$username' AND status='2'";
        }
        $result = $this->pdo->query($sql)->fetchColumn();
        return $result;
    }

    public function get_ongoing($username = null){
        $sql = "SELECT COUNT(questID) FROM quests";
        if($username!=null){
            $sql .= " WHERE username = '$username' AND status='1'";
        }
        $result = $this->pdo->query($sql)->fetchColumn();
        return $result;
    }public function get_added($username = null){
        $sql = "SELECT COUNT(questID) FROM quests";
        if($username!=null){
            $sql .= " WHERE username = '$username' ";
        }
        $result = $this->pdo->query($sql)->fetchColumn();
        return $result;
    }
    public function get_members($guild){
        $sql = "SELECT * FROM guild";
        if($guild!=null){
            $sql .= " WHERE guild_name='$guild' ";
        }
        $result = $this->pdo->query($sql)->fetchAll();
        return $result;
    }
   

}
