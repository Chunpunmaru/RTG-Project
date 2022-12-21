<?php

    require_once "./config/Connection.php";
    require_once "./module/Get.php";
    require_once "./module/Global.php";
    require_once "./module/Post.php";
    require_once "./module/Auth.php";
    require_once "./module/Patch.php";
    require_once "./module/add_guild.php";
    require_once "./module/add_lvl.php";

    $db = new Connection;
    $pdo = $db->connect();

    $get = new Get($pdo);
    $post = new addTask($pdo);
    $patch = new patch($pdo);
    $add_lvl = new addlvl();
    $auth = new Auth($pdo);
    $guild = new addGuild($pdo);


    $data = json_decode(file_get_contents("php://input"));

    if(isset($_REQUEST['request'])){
        $req = explode('/', rtrim($_REQUEST['request'], '/') );
    
    }
    else{
        http_response_code(404);
    }

    if($_SERVER['REQUEST_METHOD'] ==='OPTIONS'){
        header('HTTP/1.1 200 OK');
        exit();
    }

    switch($_SERVER['REQUEST_METHOD']){
    
        case 'GET':
            switch($req[0]){
                case 'daily':
                if(count($req)>1){
                    echo json_encode($get->get_daily($req[1]));
                }
                else{
                    echo json_encode($get->get_daily());
                }
                break;
                case 'weekly':
                    if(count($req)>1){
                    echo json_encode($get->get_weekly($req[1]));
                    }
                    else{
                    echo json_encode($get->get_weekly());
                    }
                break;
                case 'guild':
                    if(count($req)>1){
                    echo json_encode($get->get_guild_quest($req[1]));
                    }
                    else{
                    echo json_encode($get->get_guild_quest(null));
                    }
                break;
                case 'main':
                    if(count($req)>1){
                    echo json_encode($get->get_main($req[1]));
                    }
                    else{
                    echo json_encode($get->get_main());
                    }
                break;
                case 'guildMembers':
                    if(count($req)>1){
                    echo json_encode($get->get_guild_members($req[1]));
                    }
                    else{
                    echo json_encode($get->get_guild_members());
                    }
                break;

                case 'profile':
                    if(count($req)>1){
                    echo json_encode($get->get_profile($req[1]));
                    }
                break;

                case 'checking':
                    if(count($req)>1){
                    echo json_encode($auth->user_exist($req[1]));
                    }
                break;

                case 'select':
                    if(count($req)>1){
                        echo json_encode($patch->select_quest($req[1],$req[2]));
                    }
                break;
                case 'questDone':
                    if(count($req)>1){
                    echo json_encode($get->get_questDone($req[1]));
                    }
                    else{
                    echo json_encode($get->get_questDone());
                    }
                break;
                case 'MainquestDone':
                     if(count($req)>1){
                     echo json_encode($get->get_MainquestDone($req[1]));
                     }
                    else{
                     echo json_encode($get->get_MainquestDone());
                    }    
                break;    
                case 'GuildquestDone':
                    if(count($req)>1){
                    echo json_encode($get->get_GuildquestDone($req[1]));
                     }
                    else{
                    echo json_encode($get->get_GuildquestDone());
                    }    
                break;
                case 'WeeklyquestDone':
                    if(count($req)>1){
                    echo json_encode($get->get_WeeklyquestDone($req[1]));
                     }
                    else{
                    echo json_encode($get->get_WeeklyquestDone());
                    }    
                break;
                case 'DailyquestDone':
                    if(count($req)>1){
                    echo json_encode($get->get_DailyquestDone($req[1]));
                     }
                    else{
                    echo json_encode($get->get_DailyquestDone());
                    }    
                break;

                case 'questFailed':
                    if(count($req)>1){
                    echo json_encode($get->get_questFailed($req[1]));
                    }
                    else{
                    echo json_encode($get->get_questFailed());
                    }
                break;
                case 'Ongoingquest':
                    if(count($req)>1){
                    echo json_encode($get->get_ongoing($req[1]));
                     }
                    else{
                    echo json_encode($get->get_ongoing());
                    }    
                break;
                case 'added':
                    if(count($req)>1){
                    echo json_encode($get->get_added($req[1]));
                     }
                    else{
                    echo json_encode($get->get_added());
                    }    
                break;
                case 'getMembers':
                    if(count($req)>1){
                    echo json_encode($get->get_members($req[1]));
                     }
                    else{
                    echo json_encode($get->get_members(null));
                    }    
                break;

                default:
                    http_response_code(400);
                break;
            
        }
        break;
        
        case 'POST':
            switch($req[0]){
                case 'addQuest':
                    echo json_encode($post->add_task($req[1],$data));   
                break;
                
                case 'addGuild':
                    echo json_encode($guild->add_guild($req[1],$data));   
                break; 
                case 'addAccount':
                    echo json_encode($auth->add_account($data));   
                break;
                
                case 'login':
                echo json_encode($auth->login($data));   
                break;
                
                case 'encrpyt':
                    echo json_encode($auth->encrypt_password($req[1]));
                break;
                case 'decrypt':
                    echo json_encode($auth->checkPassword($req[1],$req[2]));
                
                break;
                case 'status':
                        echo json_encode($add_lvl->check_title($data));
                break;

                default:
                    http_response_code(403);
                break;
                    
            
        }
        break;
        case 'PATCH':
            switch($req[0]){
                case 'finish':
                    if(count($req)>1){
                        echo json_encode($patch->finish_task($req[1],$req[2]));
                    }
                    else{
                        echo "fail";
                    }
                break;
                case 'fail':
                    if(count($req)>1){
                        echo json_encode($patch->fail_task($req[1],$req[2]));
                    }
                break;
                case 'joinGuild':
                    echo json_encode($guild->join_guild($req[1],$data));   
                break; 
                case 'check':
                    echo json_encode($auth->user_exist($data));
                break;
                case 'add':
                    echo json_encode($patch->add_exp_profile($req[1],$req[2]));
                break;
                case 'leave':
                    echo json_encode($guild->leave_guild($req[1]));
                    break;
                case 'guildFinished':
                    echo json_encode($patch->finish_guild($req[1],$req[2]));
                break;
                

            }
        break;


        default:
        http_response_code(403);
        break;

    }

?>
