import React, { useEffect } from 'react';
import { FaGenderless } from 'react-icons/fa';

import varsity from '../asset/varsity.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import banner from '../asset/banner.png'
import labLogo from '../asset/labLogo.png'


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <>
            <div className='w-full'>

                <div data-aos="fade-down" data-aos-duration="1000" className="hero pt-20 h-48 border-b-8 border-orange-600" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div className="max-w-md">
                            <h1 data-aos="fade-left" className="text-3xl font-bold"> <span data-aos="fade-right" className='text-orange-600'>Y A Joarder || </span> About</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full '>
                    <div className=' flex flex-col mx-auto lg:flex-row'>
                        <div data-aos="fade-up" className='w-full container flex flex-col sm:w-3/4'>
                            <div className='w-full'>
                                <h1 className='text-center sm:text-start text-3xl font-bold sm:pl-80 pt-16 text-[#0a192f] '>Professional Summary</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> PhD Candidate in Information and Systems Engineering at Concordia University, Montreal, Canada; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> 4.5 years of combined experience as a Graduate Research Assistant in Bangladesh and Canada; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> 4.5 years of experience as Graduate Research Assistant in Bangladesh and Canada; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> 3.4 years of teaching experience in CSE and Cybersecurity in Bangladesh and Canada<br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>1.9 years of industry experience as a Software Testing Engineer and IT Analyst in Bangladesh and Canada<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Researcher in Cybersecurity, IoT, IIoT, IoV, IoE, Artificial Intelligence (AI), ML, and Data Science<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Professional expertise in QUIC Protocol, Machine Learning, Deep Learning and Cloud Computing<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Excellent analytical capacity, organizing efficiency, meticulous approach & problem-solving aptitude<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Commendable leadership quality, teamwork skills & autonomy with perfection even under pressure<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Over 3 years of experience in Big Data Analytics, Hadoop, Java, Python Database Administration, and
Software development expertise<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>A deep understanding of network protocols, firewalls, intrusion detection and prevention systems, and
network security technologies<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>A proficient understanding of symmetric and asymmetric encryption methods, digital signatures, and publickey infrastructure (PKI)<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Knowledge of security frameworks including NIST, ISO 27001, and SANS<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Expertise in conducting vulnerability assessments and penetration testing, as well as familiarity with tools
such as Metasploit, Nessus, and Burp<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Knowledge of SIEM solutions and familiarity with log analysis and correlation tools<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Familiarity with web security tools like OWASP ZAP and knowledge of online security flaws like cross-site
scripting (XSS) and SQL injection<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Expertise in cloud security issues, such as the privacy and confidentiality of data, and in setting up security
measures for cloud systems<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Expertise in the security of operating systems like Windows, Linux, and Unix, as well as knowledge of
security technologies like SELinux and AppArmor<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Expertise in malware analysis techniques, including reverse engineering and dynamic analysis, as well as
experience using tools like IDA Pro and OllyDbg for malware analysis<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Experience with data protection legislation, including GDPR and HIPAA, and expertise in implementing data
protection policies<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>A deep understanding of the basics of networking, including the transport layer, application layer, network
protocols, and QUIC protocol<br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Expertise in the design, implementation, and security aspects of the QUIC protocol and in evaluating and testing the protocol <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>A deep understanding of cryptography methods and protocols, such as TLS and encryption algorithms, and experience using cryptography with the QUIC protocol <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>In-Depth Expertise in QUIC Protocol Security Assessments, Threat Modeling, and Risk Analysis <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>In-depth understanding of known security flaws in the QUIC protocol and expertise in doing vulnerability assessments and penetration testing <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Expertise in implementing the QUIC protocol in a variety of settings, including cloud, edge, and IoT, and <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>familiarity with QUIC implementation tools, such as Chromium and ngtcp2 <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Expertise in improving the QUIC protocol for speed, scalability, and security, as well as familiarity with QUIC <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>performance and optimization tools like Wireshark and tcpdump <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Specialist knowledge of modelling and testing the QUIC protocol in a variety of network settings, as well as <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>familiarity with network simulation tools such as ns-3 and Mininet <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Expertise in programming languages, including C, C++, Python, and JavaScript, as well as experience developing applications for the QUIC protocol <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Experience ensuring the QUIC protocol follows industry standards and rules, such as those from IETF and ISO <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Strong hands-on experience in Hadoop Framework and its ecosystem, including HDFS Architecture, MapReduce Programming, Hive, Pig, Sqoop, HBase, Zookeeper, Couchbase, Storm, Solr, Oozie, Spark, Scala, Flume, Strom, Kafka <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Excellent knowledge of Hadoop Architecture and ecosystems such as HDFS, Job Tracker, Task Tracker, Name Node, Data Node, and Map Reduce programming paradigm <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Experience in analyzing data using HIVEQL and Pig Latin and custom Map Reduce programs in Java and Scala <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Experience in strong and analyzing data using HiveQL, Pig Latin, HBase, and custom Map Reduce programs in Java and Hadoop Streaming, MRJob, and PySpark in Python <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Experience in importing and exporting data into HDFS and Hive using Sqoop <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Good knowledge of Amazon AWS concepts like EMR & EC2 web services which provide fast and efficient processing of Big Data <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Experience in Azure Cloud environments, Cosmos DB, ADL Gen1, and ADL Gen2 <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Good hands-on experience with Azure Databricks environment <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Hands-on experience in installing and configuring Cloudera's Apache Hadoop ecosystem components like Flume-ng, HBase, Zookeeper, Oozie, Hive, Spark, Storm, Sqoop, Kafka, Hue, Pig, Hue with CDH3&4 Clusters <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Architected, Designed, and maintained high-performing ELT/ETL Processes <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Skilled in managing and reviewing Hadoop log files <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Experienced in loading data to Hive partitions and creating buckets in Hive <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Familiarity with distributed coordination system Zookeeper <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Involved in designing and deploying a multitude of an application utilizing the entire AWS stack (Including EC2, RDS, VPC, and IAM), focusing on high availability, fault tolerance, and auto-scaling. <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Experienced in implementing unified data platforms using Kafka producers/ consumers and implementing pre-processing using storm topologies <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Good knowledge of building Apache spark applications using Scala <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Experience in developing and designing POCs using Scala and deployed on the Yarn cluster, compared the performance of Spark with Hive and SQL/Teradata <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Done Administration, installing, upgrading, and managing distributions of DataStax Cassandra Cluster. <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Strong database development skills using Database servers like Oracle and My SQL, and hands-on experience with SQL, PL/SQL <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Extensive experience in backend database programming in an oracle environment using PL/SQL with tools such as TOAD <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Have a particularly good understanding and working with relational databases like MySQL, Oracle, and NoSQL databases like HBase, Mongo DB, Couchbase, and Cassandra. <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Good work experience on JAVA, JAVA 8, JDBC, Servlets, JSP. <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Proficient in Java, J2EE, JDBC, Collections, Servlets, JSP, Struts, Spring, Hibernate, JAXB, JSON, XML, XSLT, XSD, JMS, WSDL, WADL, REST, SOAP Web services, CXF, Groovy, Grails, Jersey, Gradle, and Eclipse Link. <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Good knowledge in performance troubleshooting and tuning Cassandra clusters and understanding of Cassandra Data Modeling based on applications. <br />
<FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless>Skilled in developing applications in Python and PySpark language for multiple platforms, familiarity with the process and Python software development <br />

                                 </p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>Skills of Software, System & Hardware</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">

                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Languages: </span>  C, C++, Python, Java, JavaScript, VBScript, PHP, HTML5, CSS3, Prolog, Bash <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Parallel Computing: </span>  MPI, CUDA, EC2, Elastic MapReduce, Hadoop, Spark <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Tools: </span>  OpenCV, WEKA, OpenStack, Cisco Packet Tracer, Cloud Foundry, Kubernetes, Docker, AWS, GCP, Azure, Keras, TensorFlow, Jira, Arduino, Raspberry Pi <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Scientific Computing: </span> MATLAB, Mathematica, NumPy, SciPy, Pandas, Scikit, PyTorch, Matplotlib <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Applications: </span> LATEX, Adobe Photoshop, MS Office, Model Checkers: UPPAAL, SMV, NuSMV, MS Power BI, MS SharePoint, MS Teams <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Cyber-Security Related Tools: </span> Acunetix, Wireshark, Zed Attack Proxy (ZAP) , Burp Suite, Invicti, Intruder, Metasploit, Aircrack-Ng, OpenVAS, SQLMap, NetStumbler, Ettercap, Maltego, Nikto, John The Ripper, Angry IP Scanner, WPScan, Hydra, SET, BeEF, Fern and Autopsy <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Operating Systems: </span>  Linux, macOS, Microsoft Windows <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> DBMS:</span> NoSQL: MongoDB, SQL: MySQL, Oracle <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> SCM Tools:</span>  Git, Gitlab, GitHub <br />


                                    </p>
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>Reviewer</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">


                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> IEEE Transactions on Knowledge and Data Engineering (TKDE) <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Informatics in Medicine Unlocked (Elsevier) <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Computer Networks (Elsevier) <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> CNSM 2022 (International Conference) <br />

                                    </p>
                                </div>
                            </div>
                            <div className=' '>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>Leadership Experience</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">


                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Proctor, Collegiate Penetration Testing Competition (CPTC)
                                        <br /> Concordia University,
                                        Montreal, Quebec, Canada <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> General Secretary, Student Association of ICE (SAICE),
                                        <br /> Department of Information and Communication Engineering (ICE),
                                        <br /> Islamic University, Bangladesh  <br />


                                    </p>
                                </div>
                            </div>
                            <div className=' '>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>Activities</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">


                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> GSA Concordia, Member (Jan. 2021 - Present)
                                        <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Golden Key International Honour Society, Member (Aug. 2022 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Golden Key International Honour Society, Member (Aug. 2022 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> BSA Concordia, Member (Jan. 2021 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Concordia Athletics Club, Paid Volunteer (Sept. 2021 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> IEEE Transactions on Knowledge & Data Eng., Reviewer (Oct. 2020 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Bangladesh Computer Society (BCS), Member (Sept. 2019 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> International Association of Engineers, Member (Sept. 2016 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Student Association of ICE, IU, General Secretary (Sept. 2015 - Sept. 2016) <br />



                                    </p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>Academic Training</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">

                                        Academic Research and Paper Writing from Scratch, Networking Training, Linux (Ubuntu, Kali), PLC training, Microcontroller training, IoT (Internet of Things), Teaching Learning Assessment and Research Methodology training by IQAC-WUB

                                    </p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>In Real Life</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">

                                        My interests are Traveling, hiking, mad science, photography, watching live sports, TV shows, and movies are some of my hobbies. I used to spend a lot of time reading books and playing sports like football, cricket, chess and so on....

                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className=' w-full container sm:w-1/4 pt-10 px-10 sm:pl-0 pb-10'>
                            <div data-aos="fade-left" className='flex flex-col'>

                                <div className='bg-green-200 rounded-lg my-5 shadow-md '>
                                    <div data-aos="fade-left">
                                        <div >
                                            <h1 className='text-center text-2xl font-bold  pt-5 text-[#0a192f] '>Current Research Lab</h1>
                                        </div>
                                        <div className='flex mx-auto'>
                                            <img className='w-48 h-16 mt-2 mx-auto' src={labLogo} alt="" />
                                        </div>
                                        <div>
                                            <a className=' text-cyan-600 hover:text-amber-500' href="https://ngnsec-lab.web.app/"><p className="text-lg text-center sm:pl-0 font-medium ">Next Generation Network  <br /> Security (NGNSec) Lab</p></a>
                                        </div>
                                    </div>

                                    <div className='flex mx-auto'>
                                        <img className='w-48 py-5 mx-auto' src={varsity} alt="" />
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="flex flex-col  space-y-3 rounded-lg mb-5 shadow-md bg-green-200 dark:text-gray-900">
                                    <div>
                                        <h1 className='text-center text-2xl font-bold py-5 text-[#0a192f] '>Current Engagements</h1>
                                    </div>
                                    <div className="flex space-x-2 px-2 sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2">
                                            <p className="text-lg font-medium ">Ongoing Research Topic</p>
                                            <p className="leading-snug">Artificial Intelligence Enabled Cyber Security (QUIC Protocol)</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 px-2  sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2 mb-5">
                                            <p className="text-lg font-medium leading-snug">Professional Responsibilities</p>
                                            <p className="leading-snug">Teaching Assistant, Concordia University
                                            </p>
                                        </div>
                                    </div>


                                </div>



                                <div data-aos="fade-left" className='' >
                                    <div>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName="yajoarder"
                                            options={{ height: 400 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default About;