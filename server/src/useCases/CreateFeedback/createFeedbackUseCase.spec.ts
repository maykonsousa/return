import { CreateFeedbackUseCase } from "./CreateFeedbackUseCase"
const submitFeedback = new CreateFeedbackUseCase(
  {create: async () => {}} ,
  {sendMail: async () => {}}
)
describe("CreateFeedbackUseCase", () => {
  
  it('Should be able to send a feedback', async () => {
    expect(submitFeedback.execute({
    type: "BUG",
    comment: "This is a bug",
    screenshot: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD"
   })).resolves.not.toThrow()
  });

  it('Should not be able to send a feedback without a type', async () => {
     expect(submitFeedback.execute({
      type:"",
      comment: "This is a bug",
      screenshot: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD"
    })
    ).rejects.toThrowError("Type not provided")
  })

  it('Should not be able to send a feedback without a comment', async () => {
     expect(submitFeedback.execute({
      type:"BUG",
      comment:"",
      screenshot: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD"
    })
    ).rejects.toThrowError("Feedback not created")
  })

  it('Should not be able to send the feedback with an invalid image', async()=>{
    expect(submitFeedback.execute({
      type:"BUG",
      comment:"teste de imagem",
      screenshot: "xxxxxx"
    })
    ).rejects.toThrowError("Invalid screenshot")
  })

 




})