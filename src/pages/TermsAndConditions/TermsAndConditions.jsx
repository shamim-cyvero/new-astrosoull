import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import terms from '../TermsAndConditions/terms.png'
const TermsAndConditions = () => {
    return (
        <> 
          <Box w={"100%"}  >
               
               <Image src={terms} alt={'privacy'} w={'100%'}  objectFit={'cover'} />

           </Box>
            <VStack w={'90%'} m={'auto'} p={'30px 0px'} alignItems={'flex-start'}>
                <Heading fontSize={'1.2rem'} color={'#1f3b64'} children={'Welcome to our Astrosoull Services. These Terms and Conditions outline the rules and regulations for the use of our services. By accessing or using our services, you agree to comply with these Terms and Conditions.'} />

                <Text mt={4} fontSize={'1.2rem'} fontWeight={'600'} children={'Interpretation and Definitions'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={'– “Service” refers to the astrology services provided by our website.'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={'–“User” refers to any individual accessing or using our services.'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={'– “Astrologer” refers to the professionals providing astrology readings and advice.'} />

                <Text mt={4} fontSize={'1.2rem'} fontWeight={'600'} children={'Usage and Copyright'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={'– The content and materials on our website are for personal use only'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– You may not distribute, modify, reproduce, or publish any content without prior written permission from the website owner.`} />

                <Text mt={4} fontSize={'1.2rem'} fontWeight={'600'} children={'Accuracy and Limitations'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– Our astrology services are based on interpretations and predictions derived from astrological charts and data. They should not be considered as absolute or guaranteed predictions.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– We make every effort to provide accurate and reliable information, but we do not guarantee the accuracy, completeness, or reliability of our services.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– Astrology readings should not replace professional advice in areas such as health, finances, legal matters, or any other important life decisions.`} />
              
                <Text mt={4} fontSize={'1.2rem'} fontWeight={'600'} children={'Personal Responsibility'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– It is your responsibility to use our services at your own risk and discretion.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– We are not responsible for any actions or decisions made based on the information provided through our services.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– We encourage you to exercise critical thinking and consult with professionals for specific advice when needed.`} />
                
                <Text mt={4} fontSize={'1.2rem'} fontWeight={'600'} children={'Privacy and Confidentiality'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– We respect your privacy and handle your personal information in accordance with our Privacy Policy.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– While we strive to maintain the confidentiality of your information, we cannot guarantee absolute security due to the nature of online communication.`} />
              
                <Text mt={4} fontSize={'1.2rem'} fontWeight={'600'} children={'TERMS OF SERVICE'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– Subject to the clauses contained herein and other conditions on the Website, ‍the Institute grants the User a limited, revocable, non-exclusive and non-transferable right to access and use the Services of the Institute for the duration of the course.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`-The User acknowledges that since all the courses are updated on a regular basis, therefore syllabus is subject to change without any prior notice.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`-The use of the Service is at the User’s own expense and risk. The User is responsible for meeting the technical and functional requirements and using the electronic communication facilities that are necessary to be able to access and use the Service. The User will at all times bear the risk of loss, theft or damage to any of its data.`} />
               
                <Text mt={4} fontSize={'1.2rem'} fontWeight={'600'} children={'ONLINE PAYMENT – PAYMENT GATEWAY TERMS'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`-The funds transfer for purchase of any educational course will be done by using an electronic payment gateway facility (“Electronic Payment Gateway”) for any sort of online payment. User cannot use or permit the use of the Electronic Payment Gateway or any related services for any illegal or improper purposes.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={'-Users shall utilize the Electronic Payment Gateway at their own risk. These risks would include but not be limited to misuse of password, internet fraud such as hacking, technology risks such as virus etc. and Institute disclaims all liability and responsibility for any claims, losses, damages, costs of whatsoever nature arising due to such risks.'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`-User understands that the Institute disclaims all liability, whether direct or indirect, whether arising out of loss of profit or otherwise arising out of any failure or inability by bank or any other intermediary to process any transaction or payment instructions for any reason.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`-Institute may from time to time impose maximum and minimum limits on funds that may be transferred by virtue of the payment transfer service given. User realizes, accepts and agrees that the same is to reduce the risks of the user. User shall be bound by such limits imposed and shall strictly comply with them.`} />
               
                <Text mt={4} fontSize={'1.2rem'} fontWeight={'600'} children={'Termination and Changes'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– We reserve the right to terminate or suspend our services at any time without prior notice.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={'– We may modify or update these Terms and Conditions periodically. It is your responsibility to review them regularly for any changes.'} />
              
                <Text mt={4} fontSize={'1.2rem'} fontWeight={'600'} children={'Governing Law and Jurisdiction'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`– These Terms and Conditions shall be governed by and construed in accordance with the laws of India.`} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={'– Any disputes arising from these Terms and Conditions will be subject to the exclusive jurisdiction of the courts in India.'} />
                <Text fontSize={'1.1rem'} fontWeight={'400'} color={'grey'} children={`If you have any questions or concerns regarding these Terms and Conditions, please contact us.`} />
            </VStack>
        </>
    )
}

export default TermsAndConditions
