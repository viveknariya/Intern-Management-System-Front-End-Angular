export class internLogin {

    userName: string = "";
    password: string = "";

}
export class internRegister {
    internId: string = ""
    internPassword: string = ""
    internName: string = ""
    phoneNumber: string = ""
    emailId: string = ""
    internAddress: string = ""
    internStatus: string = ""
    designation: number = 0;
}
export class designation {
    designationName: string = ""
    roleName: string = ""
    departmentName: string = " "
}
export class leave {
    internId: string = ""
    leaveDate: Date | undefined
    reason: string = ""
}

export class workingHour {
    internId: string = ""
    monthly: string = ""
    companyWorkingHour: string = ""
    internWorkingHour: string = ""
}