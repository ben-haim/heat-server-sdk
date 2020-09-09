import { NetworkFeeParam, NetworkFeeResult, tryParse, CallContext } from 'heat-server-common'

export async function networkFee(context: CallContext, param: NetworkFeeParam): Promise<{ error?: string, value?: NetworkFeeResult }> {
  try {
    const { req, protocol, host } = context
    const url = `${protocol}://${host}/api/GET-NETWORK-FEE`;
    const json = await req.get(url);
    const data = tryParse(json);

    const gasPriceWei = undefined;
    const satByte = undefined;

    return {
      value: {
        gasPriceWei,
        satByte,
      },
    };
  } catch (e) {
    return {
      error: e.message,
    };
  }
}