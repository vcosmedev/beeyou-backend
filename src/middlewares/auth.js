// import jwt from '../libs/jwt.js';

// function auth (request, response, next) {
//   try {
//     const { authorization: token } = request.headers

//     const tokenDecoded = jwt.verify(token)
//     console.log(tokenDecoded) // {id: ''}

//     if (!tokenDecoded) throw new Error('No autorizado D:')
//     request.userCurrent = tokenDecoded.id
//     request.roleCurrent = tokenDecoded.role
//     next()
//   } catch (error) {
//     response.status(401)
//     response.json({
//       success: false,
//       message: 'No autorizado u.u',
//       error: error.message
//     })
//   }
// };

// export { auth };
/* Validación si existe una credencial (login) */