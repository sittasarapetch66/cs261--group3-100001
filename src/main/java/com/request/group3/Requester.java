package com.request.group3;

import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.util.ByteArrayDataSource;

import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.time.ZonedDateTime;

import java.util.Date;
import java.util.List;



@RestController
@RequestMapping("/api/group3/request")
public class Requester{

	//Caller Interface
	@Autowired
	private RequestRepository caller;
	
	@Autowired
	private EmployeeRepository caller2;
	//private RequestRepository caller2;
	
	//Email Interface
	@Autowired
	private JavaMailSender emailsender;
	
	@Autowired
	private JavaMailSender mailSender;
	
	
	//Request Holder RequestData
	private int requestForward[] = 	{200,210,220,230,240,250,260,270,280,290,300,400};
	private int forwardSucc[] = 	{210,220,230,230,250,250,270,270,290,290,400,400};
	private int forwardFail[] = 	{200,200,220,240,260,280,300};
	
	//periodic time
	private static final Logger log = LoggerFactory.getLogger(Requester.class);
	private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

	
	@Scheduled(cron = "0 30 8 * * MON-SUN")
	public void schedule1() {
		toForward();
		log.info("The time is {}", dateFormat.format(new Date()));
	}
	
	@Scheduled(cron = "0 30 13 * * MON-SUN")
	public void schedule2() {
		toForward();
		log.info("The time is {}", dateFormat.format(new Date()));
	}

	
	
	
	//PostMapping to Insert Data to Database
	@PostMapping
	public RequestTable createUser(@RequestBody RequestTable person) {
		RequestTable rt = caller.save(person);
		return returnDataPresent(rt);

	}
	
	//GetMapping to Request All Data
	@GetMapping
	public List<RequestTable> getAllUsers(){
		List<RequestTable> rt = caller.findAll();
		return returnListDataPresent(rt);
	}
	
	//Test body return
	@GetMapping("/testhtml")
	public String testhtml() {
		System.out.println("Your String is Working");
		return "Your String is Working";
		
		//return forwardStatusCode();
	}
	
	//Test Mail Service
	@GetMapping("/testmail={mail}")
	public void testhtml(@PathVariable String mail) {
		sendMessage(mail, "Test SMTP", "This is a test of SMTP Mail Service");
	}
	
	

	//GetMapping to Request data that match input type
	@GetMapping("/type={type}")
	public List<RequestTable> getByType(@PathVariable Long type){
		return returnListDataPresent(caller.findByRequestType(type));
	}
	
	//GetMapping to Request data that match input status
	@GetMapping("/status={status}")
	public List<RequestTable> getByStatus(@PathVariable Long status){
		return returnListDataPresent(caller.findByRequestStatus(status));
	}
	
	//GetMapping to Request data that match the selected ID
	@GetMapping("/id={id}")
	public RequestTable getByID(@PathVariable Long id){
		return returnDataPresent(caller.findByID(id));
	}
	
	//GetMapping to Set Status
	@GetMapping("/id={id}/setstatus={status}")
	public RequestTable setStatus(@PathVariable("id") Long id, @PathVariable("status") Long status) {
		RequestTable rt1 = caller.findByID(id);
		
		if (rt1 != null) {
			rt1.setRequestStatus(status);
			caller.save(rt1);
			System.out.printf("Id is %d, Status is %d \n",id, status);
			return returnDataPresent(rt1);
		}
		else {
			System.out.println("No ID that specified!");
			return null;
		}
	}
	
	/*
	//GetMapping of Return Data based on ID
	@GetMapping("/type={type}/fileid={base64}")
	public String getByType(@PathVariable Long type, Long fileid){
		return caller.;
	}
	*/
	
	
	//Getmapping return number of count
	@GetMapping("/count")
	public Long countAll() {
		return caller.count();
	}
	
	//return JSON File if requested
	@GetMapping("/id={id}/file={file}")
	public String returnFileInfo(@PathVariable("id") Long id,@PathVariable("file") Long file) {
		
		//RequestTable Object
		RequestTable rt1 = caller.findByID(id);
		
		//if data is null return NULL
		if (rt1.returnFileData(file) == null)
			return "NULL";
		
		else if (rt1.returnFileData(file) == "null")
			return "NULL";
		
		//else return data
		return rt1.returnFileData(file);
	}
	
	@GetMapping("/email={email}")
	public String sendEmailviaSMTP(@PathVariable("email") String email) {

		sendMessage(email, "ทดสอบ", "ทดสอบการส่งอีเมล");
		
		return "Send";
	}
	
	//return body of the request
	@GetMapping("/statushtml")
	public String toReturnDataPresent() {
		
		return forwardStatusCode();
	}
	

	
	//method to return if data is present to avoid data overflowing
	public RequestTable returnDataPresent(RequestTable RT) {
		
		
		for(Long i = (long) 1; i<= 4; i++) {
			
			String comp = RT.returnFileData(i);
			if (comp == null || comp == "null" || comp == "NULL" || comp == "NULLSTR" || comp == "")
				RT.setFileData("FALSE", i);
			
			else
				RT.setFileData("TRUE", i);
			
			System.out.printf("Value %d is %s \n", i, RT.returnFileData(i));
		}
		
		return RT;
	}
	
	//method to return if data is present to avoid data overflowing in List
	public List<RequestTable> returnListDataPresent(List<RequestTable> LT){
		
		System.out.printf("length is %d \n", LT.size());
		
		for(RequestTable rt: LT) {
			System.out.printf("ID : %d \n", rt.getID());
			rt = returnDataPresent(rt);
			/*
			for(Long i = (long) 1; i<= 4; i++) {
				
				String comp = rt.returnFileData(i);
				if (comp == null || comp == "null" || comp == "NULL" || comp == "NULLSTR")
					rt.setFileData("FALSE", i);
				
				else
					rt.setFileData("TRUE", i);
				
				System.out.printf("Value %d is %s \n", i, rt.returnFileData(i));
			}
			*/
		}
		
		return LT;
		
	}
	
	//send email method
	public void sendMessage(String to, String sub, String text){
		
		SimpleMailMessage mes = new SimpleMailMessage();
		mes.setFrom("noreply@sko.com");
		mes.setTo(to);
		mes.setSubject(sub);
		mes.setText(text);
		emailsender.send(mes);
		
	}
	
	public String forwardStatusCode() {
		
		/*
		 * forwardstatuscode to forward status code please use time
		 */
		
		
		String TextReturn = "";
		
		// Header info
		TextReturn += "<h1> Status Code Return Version 1.0.2 </h1> <br>";
		TextReturn += "<style> table, th, td { border : 1px solid black; font-size:20px;} table{ width: 70%; margin-left : auto; margin-right: auto;}</style>";
		TextReturn += "<h2>Automatic Time Range</h2>";
		ZoneId z = ZoneId.of( "Asia/Ho_Chi_Minh" );
		TextReturn += "<p>Time now : " + ZonedDateTime.now( z ).getHour() + ":" + ZonedDateTime.now( z ).getMinute() + "</p>";
		TextReturn += "<h2>Status Detail</h2>";
		
		for(int i = 0; i < requestForward.length; i++) {
			List<RequestTable> rt = caller.findByRequestStatus((long) requestForward[i]);
			
			TextReturn += "<h3> Status : " + Integer.toString(requestForward[i]) + "</h3>";
			if (rt.isEmpty())
				TextReturn += "<p style='color:red;'>No Username to Forward</p>";
			
			else {
				TextReturn += " <table> <tr> <th> ID </th> <th> Username </th> <th> Status </th> <th> Status to</th> </tr>";
				for (RequestTable rt2 : rt ) {
					String[] result = rt2.toString().split(","); 
					
						TextReturn += "<tr>";
						
						TextReturn += "<td>";
						TextReturn += result[0].substring(16, result[0].length());
						TextReturn += "</td>";
						TextReturn += "<td>";
						TextReturn += result[3].substring(10, result[3].length());
						TextReturn += "</td>";
						TextReturn += "<td>";
						TextReturn += result[1].substring(15, result[1].length());
						TextReturn += "</td>";
						TextReturn += "<td>";
						TextReturn += Integer.toString(forwardSucc[i]);
						TextReturn += "</td>";
						
						TextReturn += "</tr>";
						
						//TextReturn += result[j] + "<br>" ;
				}
			}
			TextReturn += "</table>";
			TextReturn += "<hr>";
			
		}
		
		return TextReturn;
		
	}
	
	//to forward
	@GetMapping("/toforward")
	public String toForward() {
		
		String textReturn = "";
		
		//loop every request type
		for(int i = requestForward.length - 1; i >= 0 ; i--) {
			
			List<RequestTable> rt = caller.findByRequestStatus((long) requestForward[i]);
			
			if (rt.isEmpty()) {
				System.out.printf("Status Code %d is empty",requestForward[i]);
				textReturn += "<p> Status code " + Integer.toString(requestForward[i]) + " is empty </p>";
			}
			
			else {
				
				for(RequestTable rt2 : rt){
					//setStatus(rt2.getID(), (long) forwardSucc[i]);
					rt2.setRequestStatus((long) forwardSucc[i]);
					caller.save(rt2);
					
					System.out.printf("ID %d is set status %d successfully",rt2.getID(), requestForward[i]);
					textReturn += "<p> ID " +  Long.toString(rt2.getID()) + " Status code " + Integer.toString(requestForward[i]) + " is forward successfully </p>";
					
					
				}
			}
		}
		
		
		return textReturn;
		
	}
	
	//Experimental to forward back every request
	
	@GetMapping("/forwardbackstatus={status}")
	public void toForwardByID(@PathVariable("status") Long status) {
		for(int i = requestForward.length - 1; i >= 0 ; i--) {
			
			List<RequestTable> rt = caller.findByRequestStatus((long) requestForward[i]);
			
			if (rt.isEmpty()) {
				System.out.printf("Status Code %d is empty",requestForward[i]);
			}
			
			else {
				
				for(RequestTable rt2 : rt){
					rt2.setRequestStatus(status);
					caller.save(rt2);
					System.out.printf("ID %d is set status %d successfully",rt2.getID(), requestForward[i]);
					
				}
			}
		}
		
		
	}
	
	@GetMapping("/deleteid={id}")
	public String toDeleteID(@PathVariable("id") Long id) {
		RequestTable rt1 = caller.findByID(id);
		
		if (rt1 == null)
			return Long.toString(id) + " is not found! <br> Cannot Delete!";
		
		else {
			caller.delete(rt1);
			return Long.toString(id) + " is removed!";
		}
		
	}
	
	@GetMapping("/mailtest2")
	public void sendmessage02() throws MessagingException {
		String crntImage = "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";

		@SuppressWarnings("deprecation")
		byte[] imgBytes = Base64.decodeBase64(crntImage);
		String to = "sitta.sar@dome.tu.ac.th";
		String sub = "ไม่รู้";
		String text = "ผมอยากส่งอีเมลหาคุณ";


		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true);
		helper.setFrom("noreply@sko.com");
		helper.setTo(to);
		helper.setSubject(sub);
		helper.setText(text);
			
		ByteArrayDataSource dSource = new ByteArrayDataSource(imgBytes, "image/*");

		helper.addAttachment("attachment.jpg", dSource);

			
		mailSender.send(message);
		
		
		System.out.println("Send");
		
		
		/*
		SimpleMailMessage mes = new SimpleMailMessage();
		mes.setFrom("noreply@sko.com");
		mes.setTo(to);
		mes.setSubject(sub);
		mes.setText(text);
		emailsender.send(mes);
		 */
	}
	
	//send email based on employee id
	public String sendMessageToAdvisor( Long id) throws MessagingException {
		
		
		EmployeeTable em = caller2.findByID(id);
		
		
		String subject = "มีคำร้องนักศึกษาที่ต้องการอนุมัติ";
		String text = "";
		String email = em.getEmail();
		String[] fullname = em.getNameTH().split(" ");	
		String name = fullname[0];
		
		text = "สวัสดีคุณ ${name} \n ทางระบบได้ส่งจดหมายฉบับนี้มาเพื่อแจ้งเตือนให้คุณอนุมัติคำร้องของนักศึกษาในระบบคำร้องนักศึกษา \n\nหากคุณไม่ทราบว่าต้องอนุมัติที่ใด โปรดกดลิงค์ ... เพื่อทำการเรียนรู้เพิ่มเติม \n\n\n ขอแสดงความนับถือ \n ระบบคำร้องนักศึกษา กลุ่ม 3";
		
		
		SimpleMailMessage mes = new SimpleMailMessage();
		mes.setFrom("noreply@sko.com");
		mes.setTo(email);
		mes.setSubject(subject);
		mes.setText(text);
		emailsender.send(mes);
		
		return "Send Success";
		
	}
	

	
}

//Old methods

/*
//Just testing get mapping
@GetMapping("/test/id={id}")
public RequestTable testReturnValue(@PathVariable Long id){
	
	//RequestTable rt2 = new RequestTable();
	RequestTable rt2 = caller.findByID(id);
	//System.out.printf("Id Value is : %d", id);
	//System.out.printf("RT2 Value is : %s", rt2.returnFileData((long) 1));

	//System.out.printf("RT2 Value is : %s", rt2.returnFileData((long) 3));
	return returnDataPresent(rt2);
}*/




