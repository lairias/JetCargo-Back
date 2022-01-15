export const GetAllPassReset = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await PA_STATES.findAll({
      include: { PA_CITIES },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const GetPassReset = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await PA_STATES.findAll({
      include: { PA_CITIES },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const UpdatePassReset = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({
      include: { PA_CITIES },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const DeletePassReset = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({
      include: { PA_CITIES },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const CreatePassReset = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({
      include: { PA_CITIES },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
