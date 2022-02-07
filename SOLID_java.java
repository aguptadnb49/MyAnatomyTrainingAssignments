//SINGLE RESPONSIBILITY PRINCIPLE
class Employee{
    private int empId;
    protected int basic;
    private String name;

    public void getEmployeeDetails(int empId, int basic, String name){
        this.empId=empId;
        this.basic=basic;
        this.name=name;
    }

    public void generateReport(){
        System.out.println("Report Generated");
    }

    public void sendReport(){
        System.out.println("Report Sent");
    }
}

class Employee{
    private int empId;
    private int basic;
    private String name;

    public void getEmployeeDetails(int empId, int basic, String name){
        this.empId=empId;
        this.basic=basic;
        this.name=name;
    }
}

class GenerateEmployeeReport{
    public void generateReport(){
        System.out.println("Report Generated");
    }
}

class sendEmployeeReport{
    public void sendReport(){
        System.out.println("Report Sent");
    }
}

//OPEN/CLOSED PRINCIPLE
class NOtification{

    public void emailNotification(){
        //code for email notification
    }

    public void phoneNotification(){
        //code for triggering phone notification
    }
}
//Now if we want to allow one more notification type that is in whatsapp then we have to change 
//the implementation inside the class that is we have to modify our class that violates OCP
class Type{
    private String notificationType;
    Type(String notificationType){
        this.notificationType=notificationType;
    }
}
interface Notification{
    void triggerNotification(Type notificationType);
}

class EmailNotification implements Notification{
    public void triggerNotification(Type notificationType){
        //code to trigger notification on E-Mail
    }
}
class PhoneNotification implements Notification{
    public void triggerNotification(Type notificationType){
        //code to trigger notification on Phone
    }
}
class WhatsappNotification implements Notification{
    public void triggerNotification(Type notificationType){
        //code to trigger notification on Whatsapp
    }
}
//In this way we can implement any kind of notification only we have to implement the  interface 
//and overwrite the method



//LISKOV'S SUBSTITUTION PRINCIPLE
abstract class Mobile{

    abstract void sendText();
    abstract void ring();
    abstract void accessInternet();
    abstract void access5GNetwork();
}

class OnePlus extends Mobile{
    void sendText(){
        //logic for send text
    }
    void ring(){
        //logic for ring
    }
    void accessInternet(){
        //logic for internet
    }
    void access5GNetwork(){
        //logic for 5G access
    }
}

class Nokia3310 extends Mobile{
    void sendText(){
        //logic for text send
    }
    void ring(){
        //logic for ring
    }
    void accessInternet(){
        //not applicable
    }
    void access5GNetwork(){
        //not applicable
    }
}

class HTC extends Mobile{
    void sendText(){
        //logic for text send
    }
    void ring(){
        //logic for ring
    }
    void accessInternet(){
        //logic for internet
    }
    void access5GNetwork(){
        //not applicable
    }
}
//In this way we can say that child HTC is not a substitutable for its parent Mobile.
//This violates the LSP.

interface BasicFeatures{
    void ring();
    void sendText();
}
interface BasicInternetAccessType{
    void accessInternet();
}
interface AdvanceInternetAccessType{
    void access5GNetwork();
}

class Nokia3310 implements BasicFeature{
    void ring(){

    }

    void sendtext(){

    }
}

class OnePlus implements BasicFeature,BasicInternetAccessType,AdvanceInternetAccessType{
    void ring(){

    }

    void sendtext(){
        
    }

    void accessInternet(){

    }

    void access5GNetwork(){

    }
}

class HTC implements BasicFeature,BasicInternetAccessType{
    void ring(){

    }

    void sendtext(){
        
    }

    void accessInternet(){

    }
}


//Interface Segregation Principle

interface Customer{
    void getCustomerData();
    void generateCustomerPoint();
    void showTotalBookings();
    void showTotalExpenses();
}

class SaveCustomerdata implements Customer{
    public void getCustomerData(){

    }
    public void generateCustomerPoint(){

    }
    public void showTotalBookings(){

    }
    public void showTotalExpenses(){

    }
}
//Here SaveCustomer class has to override all the method inside the inetrface Customer,
//here the client is forced to override all the method. So, the essence of ISP gets violated

interface CustomerPersonalData{
    void getCustomerData();
}
interface CustomerRevenue{
    void showTotalBookings();
    void showTotalExpenses();
}
interface CustomerRewards{
    void generateCustomerPoint();
}

//now the classes are not forced to override the method as they are segregated according to the
//the business logic.


//Dependency Inversion Principle

class Dean{
    
    void manageCollege(){

    }

    void giveSalary(){

    }
}
class College{

    private Dean d;

    College(Dean d){
        this.d=d;
    }

    void manage(){
        d.manageCollege();
    }
}
//we can see that Dean and College class is tightly coupled. As Collgege class is directly dependent on Dean class
//It violates the DIP
