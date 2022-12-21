<?php

    class addTask{
        
        protected $pdo, $gm;

        public function __construct(\PDO $pdo)
        {  
           $this ->gm = new GlobalMethods($pdo);

        // use the global methods
           $this ->pdo = $pdo;
        }
        
        public function add_task($username,$data){
        $exp= null;
        $guildquest = $data->category. "-" .$data->guildname;
            if($data->category=="Main"){
                $exp = 500;
            }else if($data->category=="Guild"){
                $exp = 20;
                try{
                    $sql = "INSERT INTO quests (username,title,deadline,category,exp,description,status) VALUES (?,?,?,?,?,?,1);";
                    $stmt = $this->pdo->prepare($sql);
                    $stmt->execute([$username, $data->title, $data->deadline, $guildquest, $exp, $data->description]);
                    return $this->gm->response_payload(null, "success", "Succesfully inserted data.", 200);
                }catch(\PDOException $e){
                    return $this->gm->response_payload(null, "failed", "Failed to insert data.", 400);
                }
            }else if($data->category=="Weekly"){
                $exp = 30;
            }else if($data->category== "Daily"){
                $exp = 10;
            }
            try{
                $sql = "INSERT INTO quests (username,title,deadline,category,exp,description,status) VALUES (?,?,?,?,?,?,1);";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$username, $data->title, $data->deadline, $data->category, $exp, $data->description]);
                return $this->gm->response_payload(null, "success", "Succesfully inserted data.", 200);
            }
            catch(\PDOException $e){
                return $this->gm->response_payload(null, "failed", "Failed to insert data.", 400);
            }
        }
        
}
 