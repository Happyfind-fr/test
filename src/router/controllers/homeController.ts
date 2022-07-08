import { helloService } from '../services/helloService';

export function homeController(req: homeControllerProps, res: any) {
    res.status(200).send(helloService(req.body.user.firstName ? req.body.user.firstName : "Guest",
        req.body.user.lastName ? req.body.user.lastName : "GuestLASTNAME"));
}

export interface homeControllerProps {
    body: { user: { firstName: string; lastName: string; } }
}

export default homeController;


